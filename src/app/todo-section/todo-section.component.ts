import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService, FilterEnum, ToDoService, ToDoData } from '../services'

@Component({
  selector: 'app-todo-section',
  templateUrl: './todo-section.component.html',
  styleUrls: ['./todo-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  // TODO: Always use onPush https://angular.io/api/core/ChangeDetectorRef#usage-notes https://angular.io/api/core/ChangeDetectionStrategy
})

export class TodoSectionComponent implements OnInit {
  items: Observable<ToDoData[]>

  filterEnum = FilterEnum;
  filterAll: boolean = true;
  filterActive: boolean = false;
  filterCompleted: boolean = false;
  counter: number = 0;



  // TODO: Keep every service private and readonly for components
  constructor(private todoService: ToDoService, private counterServise: CounterService,) {
    this.items = todoService.stream;
  }

  ngOnInit(): void {

  }
  // TODO: Always provide response types
  onFilterSelect(filter: string): void {

    this.todoService.filter = filter;
    if (filter === this.filterEnum.filterAll) {
      this.filterAll = true;
      this.filterActive = this.filterCompleted = false;
    } else if (filter === this.filterEnum.filterActive) {
      this.filterActive = true;
      this.filterAll = this.filterCompleted = false;
    } else if (filter === this.filterEnum.filterCompleted) {
      this.filterCompleted = true;
      this.filterAll = this.filterActive = false;
    }
    this.todoService.filterArray();
  }
  onClearArray(): void {
    this.todoService.clearArray();
    this.counterServise.counterClearArray();
  }
  onSortAsc(): void {
    this.todoService.sortAsc();
  }
  onSortDesc(): void {
    this.todoService.sortDesc();
  }
  countHandler(): boolean {
    return (this.counterServise.countAllToDo > 0)
  }
  countCompletedHandler(): boolean {
    return (this.counterServise.countCompletedToDo > 0)
  }
  getCount(): number {
    return this.counterServise.count;
  }

}
