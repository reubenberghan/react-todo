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
var TodoApp = require('TodoApp');

describe('TodoApp', () => {

    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handlAddTodo', () => {

        var testTodoText = 'test text';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

        todoApp.setState({ todos: [] });
        todoApp.handleAddTodo(testTodoText);

        expect(todoApp.state.todos[0].text).toBe(testTodoText);

    });

    it('should toggle completed value when handleToggle called', () => {

        var testTodo = { id: 11, text: 'test task', completed: false };

        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

        todoApp.setState({ todos: [ testTodo ] });

        expect(todoApp.state.todos[0].completed).toBe(false);

        todoApp.handleToggle(testTodo.id);

        expect(todoApp.state.todos[0].completed).toBe(true);

    });

});