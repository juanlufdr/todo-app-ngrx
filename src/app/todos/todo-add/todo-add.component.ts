import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { addTodo } from '../models/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  textInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.textInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {}

  addTodo() {
    if (this.textInput.invalid) return;
    this.store.dispatch(addTodo({ text: this.textInput.value }));
    this.textInput.reset();
    console.log(this.textInput.value);
    console.log(this.textInput.valid);
  }
}
