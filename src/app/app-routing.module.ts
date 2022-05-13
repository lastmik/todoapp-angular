import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";


const routing: Routes = [
  { path: '', component: AppComponent },
  { path: '', loadChildren: () => import('./modules/todo.module').then(m => m.ToDoModule) }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routing)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
