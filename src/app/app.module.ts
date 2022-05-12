import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// TODO: Move into barrel https://basarat.gitbook.io/typescript/main-1/barrel
import {CounterService, ToDoService, TrimDirective} from './services'
import { ToDoModule } from './modules/todo.module';


@NgModule({
  declarations: [
    AppComponent,
    TrimDirective,
    // TODO: Move into TodoModule and lazy load by a router

  ],
  imports: [

    ToDoModule
  ],
  // TODO: Use providerIn: root instead
  providers: [ToDoService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
