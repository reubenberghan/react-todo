'use strict';

const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch')

const TodoApp = React.createClass({
    getInitialState: function getInitialStateTodoApp () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                }, {
                    id: 2,
                    text: 'Clean the yard'
                }, {
                    id: 3,
                    text: 'Pick up milk'
                }, {
                    id: 4,
                    text: 'Return DVDs'
                }
            ]
        };
    },
    handleAddTodo: function handleAddTodoTodoApp (text) {
        alert('new todo: ' + text);
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