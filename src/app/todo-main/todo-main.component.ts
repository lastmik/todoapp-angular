import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAX_LENGHT, MIN_LENGHT } from 'src/env';
import {CounterService, ToDoService} from '../data/services'



@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.css']
})
export class TodoMainComponent implements OnInit {
  @Output() outNewToDo = new EventEmitter<string>();
  constructor(private todoService: ToDoService, public counterSercice: CounterService) { }
  inputControl:FormControl;
  isValid:string;
  ngOnInit(): void {
    this.inputControl = new FormControl("",[Validators.required, Validators.minLength(MIN_LENGHT), Validators.maxLength(MAX_LENGHT)]);
    this.inputControl.statusChanges.subscribe((status)=>this.isValid=status);
  }
  addNewToDo(element: HTMLInputElement) :void {
    let text = element.value.trim();

     if(this.isValid==="VALID"){
      this.todoService.addToDo(text);
      this.counterSercice.counterIncrement();
      element.value = "";
     }

  }

  toggleAll() : void{
    this.todoService.toggleAll(this.counterSercice.countActive, this.counterSercice.countCompletedToDo);
    this.counterSercice.toggleAll();
  }
}
