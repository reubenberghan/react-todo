'use strict';

// external modules
const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');

// using es6s destructuring feature to pull out all the required constiables from the `react-route` module
const { Route, Router, IndexRoute, hashHistory } = require('react-router');

// app components
import TodoApp from 'TodoApp';
import Login from 'Login';

// redux components
const actions = require('actions');
const store = require('configureStore').configure();

const TodoAPI = require('TodoAPI');

// store.subscribe(() => {
//     const state = store.getState();
//     console.log('New state', state);
//     TodoAPI.setTodos(state.todos);
// });

// const initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

// load foundation
$(document).foundation();

// custom app css
require('style!css!sass!applicationStyles');

// the `IndexRoute` component lets `react` know which component is our default (index) route to render
// we then nest further `Route` components to define the components we want rendered at which route
ReactDOM.render(
    <Provider store={ store }>
        <Router history={ hashHistory }>
            <Route path="/">
                <Route path="/todos" component={ TodoApp } />
                <IndexRoute component={ Login } />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);