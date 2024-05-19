import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  actualFilter: string = 'all';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.store.select('todos').subscribe((todos) => (this.todos = todos));
    this.store.subscribe(({ todos, filters }) => {
      this.todos = todos;
      this.actualFilter = filters;
    });
  }
}
