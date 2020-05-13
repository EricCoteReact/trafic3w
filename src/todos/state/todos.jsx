import React, { Component } from 'react';
import FilterButtons from './filter-buttons';
import AddTodo from './add-todo';
import VisibleTodoList from './visible-todo-list';
import initialTodos from '../common/initial-todos';
import { VisibilityFilters } from './visibility-filters';

export default class Todos extends Component {
  state = {
    todos: initialTodos,
    visibilityFilter: VisibilityFilters.SHOW_ALL, //"SHOW_COMPLETED", "SHOW_ACTIVE"
  };
  currentId = 4;

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    });
  };

  addTodo = (todoText) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.currentId++,
          text: todoText,
          completed: false,
        },
      ],
    });
  };

  deleteTodo = (id) => {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  };

  changeFilter = (filter) => this.setState({ visibilityFilter: filter });

  render() {
    return (
      <div>
        <h1>Todos (using state)</h1>
        <AddTodo onAddTodo={this.addTodo} />
        <FilterButtons
          visibilityFilter={this.state.visibilityFilter}
          onChangeFilter={this.changeFilter}
        />
        <VisibleTodoList
          todos={this.state.todos}
          visibilityFilter={this.state.visibilityFilter}
          onToggleTodo={this.toggleTodo}
          onDeleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

//dispatch: fonction centrale, qui est appelé pour tout changement.
//dispatch(action)
//action: Object qui décrit les changements que l'on désire.
//action.type: string qui décrit le type de changement.
//reducer: fonction, appelée suite à un dispatch
//reducer(state, action)   :  retourne le nouveau state.
//IMPORTANT: le state est immuable
