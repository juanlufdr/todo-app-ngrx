import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/models/todo.reducer';
import { ValidFilters } from './filter/filter.model';
import { filterReducer } from './filter/filter.reducer';

export interface AppState {
  todos: Todo[];
  filters: string;
}

export const AppReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filters: filterReducer,
};
