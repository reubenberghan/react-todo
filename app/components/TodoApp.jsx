'use strict';

const React = require('react');
const uuid = require('node-uuid');
const moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

const TodoApp = React.createClass({
    render: function renderTodoApp () {
        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch />
                            <TodoList />
                            <AddTodo />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;

// const TodoApp = React.createClass({
//     getInitialState: function getInitialStateTodoApp () {
//         return {
//             showCompleted: false,
//             searchText: '',
//             todos: TodoAPI.getTodos()
//         };
//     },
//     componentDidUpdate: function componentDidUpdateTodoApp () {
//         TodoAPI.setTodos(this.state.todos);
//     },
//     handleAddTodo: function handleAddTodoTodoApp (text) {
//         this.setState({
//             todos: [
//                 ...this.state.todos, {
//                     id: uuid(),
//                     text: text,
//                     completed: false,
//                     createdAt: moment().unix(),
//                     completedAt: null
//                 }
//             ]
//         });
//     },
//     // with the help of redux we can replace the need for having this function at the top component level 
//     // and having to passing it right down to the `todo` component 
//     handleToggle: function handleToggleTodoApp (id) {
//         var updatedTodos = this.state.todos.map(todo => {
//             if (todo.id === id) {
//                 todo.completed = !todo.completed;
//                 todo.completedAt = todo.completed ? moment().unix() : null;
//             }

//             return todo;
//         });
        
//         this.setState({ todos: updatedTodos });
//     },
//     handleSearch: function handleSearchTodoApp (showCompleted, searchText) {
//         this.setState({
//             showCompleted: showCompleted,
//             searchText: searchText.toLowerCase()
//         });
//     },
//     render: function renderTodoApp () {
//         var { todos, showCompleted, searchText } = this.state;
//         var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

//         return (
//             <div>
//                 <h1 className="page-title">Todo App</h1>
//                 <div className="row">
//                     <div className="column small-centered small-11 medium-6 large-5">
//                         <div className="container">
//                             <TodoSearch onSearch={ this.handleSearch } />
//                             <TodoList />
//                             <AddTodo onAddTodo={ this.handleAddTodo } />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// });