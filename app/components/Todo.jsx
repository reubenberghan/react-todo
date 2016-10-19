'use strict';

const React = require('react');
const { connect } = require('react-redux');
const moment = require('moment');
const actions = require('actions');

// exporting our component here allows us to access it in our tests
// as what is exported below as the default has been passed through the `connect` method and expects a store
export const Todo = React.createClass({
    render: function renderTodo () {
        var { id, text, completed, createdAt, completedAt, dispatch } = this.props;
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
                <input type="checkbox" id={ id } checked={ completed } onChange={ () => dispatch(actions.toggleTodo(id)) } />
                <label htmlFor={ id }>
                    <p>{ text }</p>
                    <p className="todo__subtext">{ renderDate() }</p>
                </label>
            </div>
        );
    }
});

// we don't always need to pass state but calling connect on our exported component provides the `dispatch` method to our `props` object
// allowing us to dispatch actions as in the case of `Todo` where we need to toggle todos
export default connect()(Todo);

// module.exports = Todo;