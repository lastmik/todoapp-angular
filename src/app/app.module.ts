import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoMainComponent } from './todo-main/todo-main.component';
import { TodoElementComponent } from './todo-element/todo-element.component';
import { TodoSectionComponent } from './todo-section/todo-section.component';
import { ToDoData } from './Data/todo.data';

@NgModule({
  declarations: [
    AppComponent,
    TodoMainComponent,
    TodoElementComponent,
    TodoSectionComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [ToDoData],
  bootstrap: [AppComponent]
})
export class AppModule { }
