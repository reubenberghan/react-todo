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
var Todo = require('Todo');

describe('Todo', () => {

    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should call onToggle prop with id on click', () => {

        var testTodo = { id: 11, text: 'test task', completed: false };

        var spy = expect.createSpy();

        var todo = TestUtils.renderIntoDocument(<Todo { ...testTodo } onToggle={ spy } />);

        var $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.change($el.find('input[type="checkbox"]')[0]);

        expect(spy).toHaveBeenCalledWith(testTodo.id);

    });

});