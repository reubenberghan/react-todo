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
var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {

    it('should exist', () => {
        expect('TodoSearch').toExist();
    });

    it('should call onSearch with entered input text', () => {

        var testSearchStr = 'Dog';
        var testCompletedBool = false;

        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={ spy } />);

        todoSearch.refs.searchText.value = testSearchStr;

        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(testCompletedBool, testSearchStr);

    });

    it('should call onSearch with proper checked value', () => {

        var testSearchStr = '';
        var testCompletedBool = true;

        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={ spy } />);

        todoSearch.refs.showCompleted.checked = testCompletedBool;

        TestUtils.Simulate.change(todoSearch.refs.showCompleted);
        
        expect(spy).toHaveBeenCalledWith(testCompletedBool, testSearchStr);

    });

});