import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filterTodos',
})
export class FilterTodosPipe implements PipeTransform {
  transform(todos: Todo[], filter?: string): Todo[] {
    switch (filter) {
      case 'completed':
        return todos.filter((todo) => todo.complete);
      case 'pendings':
        return todos.filter((todo) => !todo.complete);
      default:
        return todos;
    }
  }
}
