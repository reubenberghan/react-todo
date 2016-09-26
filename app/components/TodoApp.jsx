'use strict';

const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
const uuid = require('node-uuid');

const TodoApp = React.createClass({
    getInitialState: function getInitialStateTodoApp () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog'
                }, {
                    id: uuid(),
                    text: 'Clean the yard'
                }, {
                    id: uuid(),
                    text: 'Pick up milk'
                }, {
                    id: uuid(),
                    text: 'Return DVDs'
                }
            ]
        };
    },
    handleAddTodo: function handleAddTodoTodoApp (text) {
        this.setState({
            todos: [
                ...this.state.todos, {
                    id: uuid(),
                    text: text
                }
            ]
        });
    },
    handleSearch: function handleSearchTodoApp (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function renderTodoApp () {
        var { todos } = this.state;

        return (
            <div>
                <TodoSearch onSearch={ this.handleSearch } />
                <TodoList todos={ todos } />
                <AddTodo onAddTodo={ this.handleAddTodo } />
            </div>
        );
    }
});

module.exports = TodoApp;