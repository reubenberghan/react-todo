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
var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {

    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each todo item', ()=> {

        var todos = [{
            id: 1,
            text: 'Do something'
        }, {
            id: 2,
            text: 'Check mail'
        }];

        var todoList = TestUtils.renderIntoDocument(<TodoList todos={ todos } />);

        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(todos.length);

    });

    it('should render no todos message if no todos', ()=> {

        var todos = [];

        var todoList = TestUtils.renderIntoDocument(<TodoList todos={ todos } />);
        var $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container__message').length).toBe(1);

    });

});