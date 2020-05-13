import React, { useReducer, useState } from 'react';
import FilterButtons from './filter-buttons';
import AddTodo from './add-todo';
import VisibleTodoList from './visible-todo-list';
import TodoContext from './todo-context';
import reducer from './reducer';
import { addTodo, toggleTodo, VisibilityFilters, deleteTodo } from './action';
import initialTodos from '../common/initial-todos';

export default function Todos(props) {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const [visibilityFilter, setVisibilityFilter] = useState(
    VisibilityFilters.SHOW_ALL
  );

  return (
    <TodoContext.Provider
      value={{
        todos: todos,
        onAddTodo: (text) => dispatch(addTodo(text)),
        onToggleTodo: (id) => dispatch(toggleTodo(id)),
        onDeleteTodo: (id) => dispatch(deleteTodo(id)),
        visibilityFilter: visibilityFilter,
        onChangeFilter: setVisibilityFilter,
      }}
    >
      <h1>Todos (using context, hooks, actions and reducers)</h1>
      <AddTodo />
      <FilterButtons />
      <VisibleTodoList />
    </TodoContext.Provider>
  );
}
