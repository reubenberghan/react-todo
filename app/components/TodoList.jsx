'use strict';

const React = require('react');
const Todo = require('Todo');

const TodoList = React.createClass({
    render: function renderTodoList () {
        var { todos } = this.props;

        // as our todos come as an array list we need a function map over that array and return each item
        // we can use the built in JavaScript array method `map` to do just that
        // When iterating over an array generating multiple instances of a component we have to give them a unique `key` prop 
        // this `key` prop is used internally by React to keep track of the individual components
        // in our case each `todo` has an `id` property which we can use
        var renderTodos = () => {
            return todos.map((todo) => {

                // note that we can pass each prop of the `todo` item down to the `Todo` component using the spread operator
                // this means we don't have to explicitly define the props we want to pass down
                return (
                    <Todo key={ todo.id } { ...todo } />
                );
            });
        };

        return (
            <div>
                { renderTodos() }
            </div>
        );
    }
});

module.exports = TodoList;