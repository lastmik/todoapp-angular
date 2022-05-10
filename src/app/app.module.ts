import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoMainComponent } from './todo-main/todo-main.component';
import { TodoElementComponent } from './todo-element/todo-element.component';
import { TodoSectionComponent } from './todo-section/todo-section.component';
// TODO: Move into barrel https://basarat.gitbook.io/typescript/main-1/barrel
import {CounterService, ToDoService, TrimDirective} from './services'


@NgModule({
  declarations: [
    AppComponent,
    TrimDirective,
    // TODO: Move into TodoModule and lazy load by a router
    TodoMainComponent,
    TodoElementComponent,
    TodoSectionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // TODO: Use providerIn: root instead
  providers: [ToDoService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
