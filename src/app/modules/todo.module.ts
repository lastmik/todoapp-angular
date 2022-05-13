import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { TodoElementComponent } from "../todo-element/todo-element.component";
import { TodoMainComponent } from "../todo-main/todo-main.component";
import { TodoSectionComponent } from "../todo-section/todo-section.component";


@NgModule({
  declarations: [
    TodoMainComponent,
    TodoElementComponent,
    TodoSectionComponent

  ],
  exports: [
    TodoMainComponent,
    TodoElementComponent,
    TodoSectionComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class ToDoModule {

}
