import { Injectable } from "@angular/core";
import { ToDoService } from "./todo.service";

// TODO: Check if we can remove this service at all and compute count based on rendered records

@Injectable()
export class CounterService {
  private todoCount: number = 0;
  private todoCompletedCount: number = 0;
  constructor(private todoSercise: ToDoService) {

  }
  counterIncrement() : void{
    this.todoCount++;
  }
  counterDecrement() : void{
    this.todoCount--;
  }
  counterCompletedIncrement() : void{
    this.todoCompletedCount++;
  }
  counterCompletedDecrement() : void{
    this.todoCompletedCount--;
  }
  get countAllToDo() {
    return this.todoCount + this.todoCompletedCount;
  }
  get countCompletedToDo() {
    return this.todoCompletedCount;
  }
  get countActive() {
    return this.todoCount;
  }
  get count() {
    if (this.todoSercise.filter === "All") {
      return this.todoCount + this.todoCompletedCount;
    } else if (this.todoSercise.filter === "Active") {
      return this.todoCount;
    } else {
      return this.todoCompletedCount;
    }
  }
  counterClearArray() : void{
    this.todoCount = this.todoSercise.array.length;
    this.todoCompletedCount = 0;
  }
  toggleAll() : void{
    if (this.todoCount == 0 && this.todoCompletedCount > 0) {
      this.todoCount = this.todoCompletedCount;
      this.todoCompletedCount = 0;
    } else if (this.todoCount > 0) {
      this.todoCompletedCount += this.todoCount;
      this.todoCount = 0;
    }
  }
}
