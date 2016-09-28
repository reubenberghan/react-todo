'use strict';

const $ = require('jquery');

module.exports = {
    setTodos: function setTodos (todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function getTodos () {

        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (err) {  }

        return $.isArray(todos) ? todos : [];

    }
};