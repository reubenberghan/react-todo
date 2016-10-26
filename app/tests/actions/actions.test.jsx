'use strict';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const expect = require('expect');

const actions = require('actions');

const createMockStore = configureMockStore([ thunk ]);

describe('Actions', () => {

    it('should exist', () => {
        expect(actions).toExist();
    });

    it('should generate search text action', () => {
        const action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some search text'
        };
        const res = actions.setSearchText(action.searchText);

        expect(res).toEqual(action);
    });

    it('should generate toggle show completed action', () => {
        const action = { type: 'TOGGLE_SHOW_COMPLETED' };
        const res = actions.toggleShowCompleted();

        expect(res).toEqual(action);
    });

    it('should generate add todo action', () => {
        const action = {
            type: 'ADD_TODO',
            todo: {
                id: 'abc123',
                text: 'Something to do',
                completed: false,
                createdAt: 123
            }
        };
        const res = actions.addTodo(action.todo);

        expect(res).toEqual(action);
    });

    it('should generate todo and dispatch ADD_TODO', done => {
        const store = createMockStore({});
        const todoText = 'My todo item';

        store.dispatch(actions.startAddTodo(todoText)).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toInclude({ type: 'ADD_TODO', todo: { text: todoText } });
            done();
        }).catch(done);
    });

    it('should generate add todos action object', () => {
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
        const res = actions.addTodos(todos);

        expect(res).toEqual(action);
    });

    it('should generate toggle todo action', () => {
        const action = {
            type: 'TOGGLE_TODO',
            id: 1
        };
        const res = actions.toggleTodo(1);

        expect(res).toEqual(action);
    });

});