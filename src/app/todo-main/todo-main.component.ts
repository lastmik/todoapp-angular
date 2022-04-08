import { Component, OnInit } from '@angular/core';
import { ToDoData } from '../Data/todo.data';

@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.css']
})
export class TodoMainComponent implements OnInit {

  constructor(private todos:ToDoData) { }

  ngOnInit(): void {
  }
  addNewToDO(element:HTMLInputElement){
    this.todos.elemetsData.push(element.value);
    element.value=""
  }
}
