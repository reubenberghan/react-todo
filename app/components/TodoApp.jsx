'use strict';

const React = require('react');
const uuid = require('node-uuid');

const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
const TodoAPI = require('TodoAPI');

const TodoApp = React.createClass({
    getInitialState: function getInitialStateTodoApp () {
        return {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        };
    },
    componentDidUpdate: function componentDidUpdateTodoApp () {
        TodoAPI.setTodos(this.state.todos);
    },
    handleAddTodo: function handleAddTodoTodoApp (text) {
        this.setState({
            todos: [
                ...this.state.todos, {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        });
    },
    handleToggle: function handleToggleTodoApp (id) {
        var updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) todo.completed = !todo.completed;
            return todo;
        });
        
        this.setState({ todos: updatedTodos });
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
                <TodoList todos={ todos } onToggle={ this.handleToggle } />
                <AddTodo onAddTodo={ this.handleAddTodo } />
            </div>
        );
    }
});

module.exports = TodoApp;