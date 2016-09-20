'use strict';

// external modules
var React = require('react');
var ReactDOM = require('react-dom');

// using es6s destructuring feature to pull out all the required variables from the `react-route` module
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

// app components
const TodoApp = require('TodoApp'); 

// load foundation
$(document).foundation();

// custom app css
require('style!css!sass!applicationStyles');

// the `IndexRoute` component lets `react` know which component is our default (index) route to render
// we then nest further `Route` components to define the components we want rendered at which route
ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
);