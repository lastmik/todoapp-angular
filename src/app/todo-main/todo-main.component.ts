import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CounterService } from '../data/counter.service';
import { ToDoService } from '../data/todo.service';



@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.css']
})
export class TodoMainComponent implements OnInit {
  @Output() outNewToDo = new EventEmitter<string>();
  constructor(private todoService: ToDoService, public counterSercice: CounterService) { }

  ngOnInit(): void {
  }
  addNewToDo(element: HTMLInputElement) {
    let text = element.value.trim();
    if (text.length >= 3 && text.length <= 200) {
      this.todoService.addToDo(text);
      this.counterSercice.counterIncrement();
      element.value = "";

    }
  }

  toggleAll() {
    this.todoService.toggleAll(this.counterSercice.getCountActive(), this.counterSercice.getCountCompletedToDo());
    this.counterSercice.toggleAll();
  }
}
