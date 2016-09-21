'use strict';

const React = require('react');
const TodoList = require('TodoList')

const TodoApp = React.createClass({
    getInitialState: function getInitialStateTodoApp () {
        return {
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
    render: function renderTodoApp () {
        var { todos } = this.state;

        return (
            <div>
                <TodoList todos={ todos } />
            </div>
        );
    }
});

module.exports = TodoApp;