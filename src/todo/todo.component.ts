import { Component, Input } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent {
  @Input() public resource: any = {
    template: 'todo',
    todos: []
  };

  public todos: string[] = ['Take out trash', 'Read book!'];

  constructor() { }
}
