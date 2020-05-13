import { actionList } from '../actions';

let nextTodoId = 4;

export default function todos(state = [], action) {
  switch (action.type) {
    case actionList.ADD_TODO:
      return [
        ...state,
        {
          id: nextTodoId++,
          text: action.text,
          completed: false,
        },
      ];

    case actionList.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case actionList.EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );

    case actionList.DELETE_TODO:
      // state.splice(
      //   state.findIndex((todo) => todo.id === action.id),
      //   1
      // );
      // return state;
      return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
}
