'use strict';

const React = require('react');

const Todo = React.createClass({
    render: function renderTodo () {
        var { id, text, completed } = this.props;

        return (
            <div>
                <input type="checkbox" id={ id } checked={ completed } onChange={ () => this.props.onToggle(id) } />
                <label htmlFor={ id }>{ text }</label>
            </div>
        );
    }
});

module.exports = Todo;