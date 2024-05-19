import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import {
  deleteTodo,
  editTodo,
  toggleCompleteTodo,
} from '../models/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('inputEdited') inputEdited!: ElementRef;
  completeTodo!: FormControl;
  todoText!: FormControl;

  isEditing: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.completeTodo = new FormControl(this.todo.complete);
    this.todoText = new FormControl(this.todo.text, Validators.required);

    this.completeTodo.valueChanges.subscribe((value) => {
      this.store.dispatch(toggleCompleteTodo({ id: this.todo.id }));
    });
  }

  edit() {
    if (this.isEditing) {
      this.endEdition();
    } else {
      this.isEditing = true;
      this.todoText.setValue(this.todo.text);
      setTimeout(() => {
        this.inputEdited.nativeElement.select();
      }, 10);
    }
  }

  endEdition() {
    this.isEditing = false;

    if (this.todoText.invalid || this.todoText.value === this.todo.text) return;

    this.store.dispatch(
      editTodo({ id: this.todo.id, text: this.todoText.value })
    );
  }

  deleteTodo() {
    this.store.dispatch(deleteTodo({ id: this.todo.id }));
  }
}
