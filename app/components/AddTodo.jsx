'use strict';

const React = require('react');

const AddTodo = React.createClass({
    handleSubmit: function onSubmitAddTodo (e) {
        e.preventDefault();

        let todoStr = this.refs.todoText.value;

        if (todoStr.length > 0) {
            this.props.onAddTodo(todoStr);
            this.refs.todoText.value = '';
        } else {
            this.refs.todoText.focus();
        }

    },
    render: function renderAddTodo () {
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={ this.handleSubmit }>
                    <input type="text" ref="todoText" placeholder="What do you need to do?" />
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;