import { ChangeDetectionStrategy, Component, Input, OnInit, Renderer2 } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAX_LENGHT, MIN_LENGHT } from 'src/env';

import {CounterService, ToDoData, ToDoService} from '../data/services'



@Component({
  selector: 'app-todo-element',
  templateUrl: './todo-element.component.html',
  styleUrls: ['./todo-element.component.css'],

})
export class TodoElementComponent implements OnInit{
  @Input() todoElement: ToDoData;
  private text: string = "";
  inputControl:FormControl;
  isValid:string;
  constructor(private todoService: ToDoService, private counterService: CounterService, private render: Renderer2) { }

  // TODO: remove unused code
  ngOnInit(): void {
    this.inputControl = new FormControl(this.todoElement.todoData,[Validators.required, Validators.minLength(MIN_LENGHT), Validators.maxLength(MAX_LENGHT)]);
    this.inputControl.statusChanges.subscribe((status)=>this.isValid=status);
  }
  deleteToDo() :void{
  if(this.todoElement.checked){
    this.counterService.counterCompletedDecrement();
  }else{
    this.counterService.counterDecrement();
  }

   this.todoService.deleteToDo(this.todoElement.id);

  }
  todoComplited() :void{

    this.todoElement.checked = !this.todoElement.checked

    if (!this.todoElement.checked) {
      this.counterService.counterIncrement();
      this.counterService.counterCompletedDecrement();
    } else {
      this.counterService.counterDecrement();
      this.counterService.counterCompletedIncrement();
    }

  }
  changeToDO(elem: HTMLInputElement) :void {
    this.text = this.todoElement.todoData;
    this.render.addClass(elem, "editing");
    elem.readOnly = false;
  }
  onBlur(elem: HTMLInputElement) : void{

    if (elem.classList.contains("editing")) {
      // TODO: move trimming functionality into directive
      let changedText = elem.value.trim();

      if (this.isValid==="VALID") {
        this.todoElement.todoData = changedText;
      } else {
        elem.value = this.text;
      }
      this.render.removeClass(elem, "editing")

      elem.readOnly = true;
    }
  }

}
