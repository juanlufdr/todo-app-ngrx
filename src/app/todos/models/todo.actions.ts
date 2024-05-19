import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[TODO] Create todo',
  props<{ text: string }>()
);

export const toggleCompleteTodo = createAction(
  '[TODO] Toggle complete todo',
  props<{ id: number }>()
);

export const editTodo = createAction(
  '[TODO] Edit todo',
  props<{ id: number; text: string }>()
);

export const deleteTodo = createAction(
  '[TODO] Delete todo',
  props<{ id: number }>()
);

export const toggleAllTodos = createAction(
  '[TODO] Toggle all todos',
  props<{ completed: boolean }>()
);

export const cleanCompletedTodos = createAction('[TODO] Clean completed todos');
