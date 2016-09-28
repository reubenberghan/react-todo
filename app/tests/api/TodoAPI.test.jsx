'use strict';

const expect = require('expect');

const TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

    // karma function which allows us to run some code before each test
    // has an opposite `afterEach` which allows us to run code after
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    });
    
    describe('setTodos', () => {
        it('should set valid todos array', () => {

            var todos = [{ id: 11, text: 'test todo', completed: false }];

            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);

        });

        it('should not set invalid todos array', () => {

            var invalidTodo = { a: 'b' };
            TodoAPI.setTodos(invalidTodo);

            // localStorage.getItem() returns null if not item not found
            expect(localStorage.getItem('todos')).toBe(null);

        });
    });
    
    describe('getTodos', () => {
        it('should return empty array for bad localStorage data', () => {

            var actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual([]);

        });

        it('should return todos if valid array in localStorage', () => {

            var todos = [{ id: 11, text: 'test todo', completed: false }];

            localStorage.setItem('todos', JSON.stringify(todos));

            var actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual(todos);
            
        });
    });

});