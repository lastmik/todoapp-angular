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
  @Input() todoElement: ToDoData;
  constructor(private todoService: ToDoService, private counterService: CounterService) { }
  private text: string = "";
  // TODO: remove unused code 
  ngOnInit(): void {

  }
  deleteToDo() {
    this.todoElement.destroy = true;
    if(this.todoElement.checked){
    this.counterService.counterCompletedDecrement();
  }else{
    this.counterService.counterDecrement();
  }
    this.todoService.deleteToDo();

  }
  todoComplited() {

    this.todoElement.checked = !this.todoElement.checked

    if (!this.todoElement.checked) {
      this.counterService.counterIncrement();
      this.counterService.counterCompletedDecrement();
    } else {
      this.counterService.counterDecrement();
      this.counterService.counterCompletedIncrement();
    }

  }
  changeToDO(elem: HTMLInputElement) {
    this.text = elem.value;
    console.log(this.text);
    // TODO: Remove direct manipulating of DOM
    // Use data binding instead https://angular.io/guide/binding-syntax
    // In rare cases we could utilize https://angular.io/api/core/Renderer2
    elem.classList.add("editing");
    elem.readOnly = false;
  }
  onBlur(elem: HTMLInputElement) {
    if (elem.classList.contains("editing")) {
      // TODO: move trimming functionality into directive
      let changedText = elem.value.trim();
      // TODO: Move validation values into constants 
      // TODO: Refactor input validation by using https://angular.io/guide/form-validation#validating-input-in-template-driven-forms
      if (changedText.length >= 3 && changedText.length <= 200) {
        elem.value = changedText;

      } else {
        elem.value = this.text;
      }
      elem.classList.remove("editing");
      elem.readOnly = true;
    }
  }

}
