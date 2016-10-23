'use strict';

const expect = require('expect');
const df = require('deep-freeze-strict');

const reducers = require('reducers');

describe('Reducers', () => {

    describe('searchTextReducer', () => {

        it('should set search text', () => {
            const action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };

            const res = reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        });

    });

    describe('showCompletedReducer', () => {

        it('should toggle show completed', () => {
            const action = { type: 'TOGGLE_SHOW_COMPLETED' }

            const res = reducers.showCompletedReducer(df(false), df(action));

            expect(res).toEqual(true);
        });

    });

    describe('todosReducer', () => {

        it('should add new todo', () => {
            const action = {
                type: 'ADD_TODO',
                text: 'Walk the dog'
            };

            const res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });

        it('should toggle todo completed', () => {
            const action = {
                type: 'TOGGLE_TODO',
                id: 1
            };

            const currentState = [{
                id: 1,
                text: 'test',
                completed: false,
                createdAt: 0,
                completedAt: null
            }];

            const res = reducers.todosReducer(df(currentState), df(action));
            
            expect(res[0].completed).toEqual(true);
            expect(res[0].completedAt).toBeA('number');
        });

        it('should add existing todos', () => {
            const todos = [{
                id: '111',
                text: 'anything',
                completed: false,
                completedAt: null,
                createdAt: 100
            }];
            const action = {
                type: 'ADD_TODOS',
                todos
            };

            const res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });

        it('should toggle todo not completed', () => {
            const action = {
                type: 'TOGGLE_TODO',
                id: 1
            };

            const currentState = [{
                id: 1,
                text: 'test',
                completed: true,
                createdAt: 0,
                completedAt: 123
            }];

            const res = reducers.todosReducer(df(currentState), df(action));
            
            expect(res[0].completed).toEqual(false);
            expect(res[0].completedAt).toEqual(null);
        });

    });

});