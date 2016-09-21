'use strict';

const React = require('react');

const Todo = React.createClass({
    render: function renderTodo () {
        var { id, text } = this.props;

        return (
            <div>{ `${ id }: ${ text }` }</div>
        );
    }
});

module.exports = Todo;