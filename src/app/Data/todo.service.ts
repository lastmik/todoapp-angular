
import { BehaviorSubject } from "rxjs";
import { ToDoData } from "./todo.data";



export class ToDoService {
  // TODO: Refactor to https://rxjs.dev/api/index/class/BehaviorSubject
  private todoArray: ToDoData[] = [];
  filter: string = "All"
  stream = new BehaviorSubject(this.todoArray)

  addToDo(name: string) :void{
    // TODO: Move this model into class. Something like new Todo(name)
    this.todoArray.push(this.newToDo(name));
    this.filterArray();

  }

  deleteToDo(id:string) :void {
    this.todoArray = this.todoArray.filter((elem) => {
      // TODO: Check if we can remove record by id
      return !(elem.id===id)
    });

  }
  get array() {
    return this.todoArray;
  }
  filterArray() : void{
    if (this.filter === 'All') {
      this.stream.next(this.todoArray);
    } else if (this.filter === 'Active') {
      this.stream.next(this.todoArray.filter((elem) => elem.checked == false));
    } else {
      this.stream.next(this.todoArray.filter((elem) => elem.checked == true));
    }

  }
  clearArray() :void {
    this.todoArray = this.todoArray.filter((elem) => {
      return elem.checked ? false : true;
    });
  }
  toggleAll(countActive: number, countCompleted: number) :void {
    if (countActive > 0) {
      this.todoArray.forEach((elem) => {
        elem.checked = true;
      });
    } else if (countActive == 0 && countCompleted > 0) {
      this.todoArray.forEach((elem) => {
        elem.checked = false;
      });
    }
  }
  sortAsc() :void{
    // TODO: Don't use shortcuts
    this.todoArray = this.todoArray.sort((a, b) => {
      let elemA = a.todoData;
      let elemB = b.todoData;
      if (elemA === elemB) {
        return a.dateCreate > b.dateCreate ? 1 : -1;
      } else {
        return elemA > elemB ? 1 : -1;
      }
    })
  }
  sortDesc() :void{

    this.todoArray = this.todoArray.sort((a, b) => {
      let elemA = a.todoData;
      let elemB = b.todoData;
      if (elemA === elemB) {
        return a.dateCreate < b.dateCreate ? 1 : -1;
      } else {
        return elemA < elemB ? 1 : -1;
      }
    })
  }

  newToDo(name:string){
    return {
      id: 'todo'+(new Date).getTime(),
      todoData: name,
      destroy: false,
       checked: false,
       dateCreate: new Date
      }
  }

}
