import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { setFilter } from 'src/app/filter/filter.actions';
import { cleanCompletedTodos } from '../models/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  actualFilter!: string;
  filters: string[] = ['all', 'completed', 'pendings'];
  pendingTodos: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.store
    //   .select('filters')
    //   .subscribe((filter) => (this.actualFilter = filter));

    this.store.subscribe((state) => {
      this.actualFilter = state.filters;
      this.pendingTodos = state.todos.filter((todo) => !todo.complete).length;
    });
  }

  changeFilter(filter: string) {
    this.store.dispatch(setFilter({ filter: filter }));
  }

  cleanCompletedTodos() {
    this.store.dispatch(cleanCompletedTodos());
  }
}
