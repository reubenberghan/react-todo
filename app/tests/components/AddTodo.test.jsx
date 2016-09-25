'use strict';

// all the modules required to run the tests on the components
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
// this is a special module required for react testing as we need to be able to 'render' the component to test its functions
// and this module provides the utilities to do so
var TestUtils = require('react-addons-test-utils');

// our component to be tested
var AddTodo = require('AddTodo');

describe('AddTodo', () => {

    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call onAddTodo if non-empty string submitted', () => {

        var spy = expect.createSpy();
        var testStr = 'test string';
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={ spy } />);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        // set our input value to test string and test that submitting the form will call onAddTodo with the test string
        addTodo.refs.todoText.value = testStr;
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(testStr);

    });

    it('should not call onAddTodo if empty string submitted', () => {

        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={ spy } />);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        // assert that our form input is an empty string and test that submitting will not call onAddTodo
        expect(addTodo.refs.todoText.value).toBe('');
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();

    });

});