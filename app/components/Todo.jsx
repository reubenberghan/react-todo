'use strict';

const React = require('react');
const moment = require('moment');

const Todo = React.createClass({
    render: function renderTodo () {
        var { id, text, completed, createdAt, completedAt } = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
        var renderDate = () => {
            var message = 'Created ';
            var timestamp = createdAt;

            if (completed) {
                message = 'Completed ';
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        };

        return (
            <div className={ todoClassName }>
                <input type="checkbox" id={ id } checked={ completed } onChange={ () => this.props.onToggle(id) } />
                <label htmlFor={ id }>
                    <p>{ text }</p>
                    <p className="todo__subtext">{ renderDate() }</p>
                </label>
            </div>
        );
    }
});

module.exports = Todo;