import { Component, OnInit } from '@angular/core';
import { ToDoData } from '../Data/todo.data';

@Component({
  selector: 'app-todo-section',
  templateUrl: './todo-section.component.html',
  styleUrls: ['./todo-section.component.css']
})
export class TodoSectionComponent implements OnInit {

  constructor(public todos:ToDoData) { }

  ngOnInit(): void {
  }

}
