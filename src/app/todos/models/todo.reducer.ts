import { createReducer, on } from '@ngrx/store';
import {
  addTodo,
  cleanCompletedTodos,
  deleteTodo,
  editTodo,
  toggleAllTodos,
  toggleCompleteTodo,
} from './todo.actions';
import { Todo } from './todo.model';

export const initialState: Todo[] = [
  new Todo('Save the world'),
  new Todo('Defeat Tanos'),
  new Todo('Collect Soul stone'),
];

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { text }) => [...state, new Todo(text)]),
  on(toggleCompleteTodo, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
  }),
  on(editTodo, (state, { id, text }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text,
        };
      }
      return todo;
    });
  }),
  on(deleteTodo, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(toggleAllTodos, (state, { completed }) => {
    return state.map((todo) => {
      return { ...todo, complete: completed };
    });
  }),
  on(cleanCompletedTodos, (state) => state.filter((todo) => !todo.complete))
);
