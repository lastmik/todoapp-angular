import { Component, OnInit } from '@angular/core';
import {CounterService, FilterEnum, ToDoService, ToDoData} from '../data/services'

@Component({
  selector: 'app-todo-section',
  templateUrl: './todo-section.component.html',
  styleUrls: ['./todo-section.component.css'],

  // TODO: Always use onPush https://angular.io/api/core/ChangeDetectorRef#usage-notes https://angular.io/api/core/ChangeDetectionStrategy
})

export class TodoSectionComponent implements OnInit {
  filterEnum = FilterEnum;
  filterAll: boolean = true;
  filterActive: boolean = false;
  filterCompleted: boolean = false;
  counter: number = 0;
  toDoArray:ToDoData[];


  // TODO: Keep every service private and readonly for components
  constructor(private todoService: ToDoService, public counterServise: CounterService,  ) {

  }

  ngOnInit(): void {
    this.todoService.stream.subscribe((val: ToDoData[])=>{
      this.toDoArray=val;
    })
  }
  // TODO: Always provide response types
  onFilterSelect(filter:string):void {

    this.todoService.filter=filter;
    if (filter === this.filterEnum.filterAll) {
      this.filterAll = true;
      this.filterActive = this.filterCompleted = false;
    } else if (filter===this.filterEnum.filterActive) {
      this.filterActive = true;
      this.filterAll = this.filterCompleted = false;
    } else if(filter === this.filterEnum.filterCompleted){
      this.filterCompleted = true;
      this.filterAll = this.filterActive = false;
    }
    this.todoService.filterArray();
  }
  onClearArray():void {
    this.todoService.clearArray();
    this.counterServise.counterClearArray();
  }
  onSortAsc(){
    this.todoService.sortAsc;
  }
  onSortDesc(){
    this.todoService.sortDesc;
  }


}
