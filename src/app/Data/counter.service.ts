import { Injectable } from "@angular/core";
import { ToDoService } from "./todo.service";

// TODO: Check if we can remove this service at all and compute count based on rendered records

@Injectable()
export class CounterService {
  private todoCount: number = 0;
  private todoCompletedCount: number = 0;
  constructor(private todoSercise: ToDoService) {

  }
  counterIncrement() {
    this.todoCount++;
  }
  counterDecrement() {
    this.todoCount--;
  }
  counterCompletedIncrement() {
    this.todoCompletedCount++;
  }
  counterCompletedDecrement() {
    this.todoCompletedCount--;
  }
  getCountAllToDo() {
    return this.todoCount + this.todoCompletedCount;
  }
  getCountCompletedToDo() {
    return this.todoCompletedCount;
  }
  getCountActive() {
    return this.todoCount;
  }
  getCount() {
    if (this.todoSercise.filter === "All") {
      return this.todoCount + this.todoCompletedCount;
    } else if (this.todoSercise.filter === "Active") {
      return this.todoCount;
    } else {
      return this.todoCompletedCount;
    }
  }
  counterClearArray() {
    this.todoCount = this.todoSercise.getArray().length;
    this.todoCompletedCount = 0;
  }
  toggleAll() {
    if (this.todoCount == 0 && this.todoCompletedCount > 0) {
      this.todoCount = this.todoCompletedCount;
      this.todoCompletedCount = 0;
    } else if (this.todoCount > 0) {
      this.todoCompletedCount += this.todoCount;
      this.todoCount = 0;
    }
  }
}
