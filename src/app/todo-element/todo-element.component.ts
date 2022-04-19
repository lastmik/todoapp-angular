import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterService } from '../data/counter.service';
import { ToDoData } from '../data/todo.data';
import { ToDoService } from '../data/todo.service';


@Component({
  selector: 'app-todo-element',
  templateUrl: './todo-element.component.html',
  styleUrls: ['./todo-element.component.css']
})
export class TodoElementComponent implements OnInit {
  @Input() todoText:ToDoData;
  constructor(private todoService:ToDoService, private counterService:CounterService) { }
  private text :string ="";
  ngOnInit(): void {

  }
  deleteToDo(){
    this.todoText.destroy = true;
    this.counterService.counterDecrement()
    this.todoService.deleteToDo();

  }
  todoComplited(){

    this.todoText.checked = !this.todoText.checked

    if(!this.todoText.checked){
    this.counterService.counterIncrement();
    this.counterService.counterCompletedDecrement();
  }else{
    this.counterService.counterDecrement();
    this.counterService.counterCompletedIncrement();
  }

  }
  changeToDO(elem:HTMLInputElement){
    this.text = elem.value;
    console.log(this.text);
    elem.classList.add("editing");
    elem.readOnly = false;
  }
  onBlur(elem:HTMLInputElement){
    if(elem.classList.contains("editing")){
      let changedText = elem.value.trim();
      if(changedText.length>=3&&changedText.length<=200){
        elem.value = changedText;

    }else{
      elem.value = this.text;
    }
    elem.classList.remove("editing");
      elem.readOnly = true;
  }
  }

}
