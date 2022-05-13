import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// TODO: Move into barrel https://basarat.gitbook.io/typescript/main-1/barrel
import { CounterService, ToDoService, TrimDirective } from './services'
import { ToDoModule } from './modules/todo.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TrimDirective,
    // TODO: Move into TodoModule and lazy load by a router

  ],
  imports: [
    ToDoModule,
    AppRoutingModule
  ],
  // TODO: Use providerIn: root instead
  providers: [ToDoService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
