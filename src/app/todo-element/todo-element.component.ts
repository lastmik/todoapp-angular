import { Component, OnInit } from '@angular/core';
import { ToDoData } from '../Data/todo.data';

@Component({
  selector: 'app-todo-element',
  templateUrl: './todo-element.component.html',
  styleUrls: ['./todo-element.component.css']
})
export class TodoElementComponent implements OnInit {
  toDoValue:string="tdy";

  constructor(private todos:ToDoData) { }

  ngOnInit(): void {

  }


}
