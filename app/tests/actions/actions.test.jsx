'use strict';

const expect = require('expect');
const actions = require('actions');

describe('Actions', () => {

    it('should exist', () => {
        expect(actions).toExist();
    });

    it('should generate search text action', () => {
        const action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some search text'
        };
        let res = actions.setSearchText(action.searchText);

        expect(res).toEqual(action);
    });

    it('should generate toggle show completed action', () => {
        const action = { type: 'TOGGLE_SHOW_COMPLETED' };
        let res = actions.toggleShowCompleted();

        expect(res).toEqual(action);
    });

    it('should generate add todo action', () => {
        const action = {
            type: 'ADD_TODO',
            text: 'Thing to do'
        };
        let res = actions.addTodo(action.text);

        expect(res).toEqual(action);
    });

    it('should generate toggle todo action', () => {
        const action = {
            type: 'TOGGLE_TODO',
            id: 1
        };
        let res = actions.toggleTodo(1);

        expect(res).toEqual(action);
    });

});