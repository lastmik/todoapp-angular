
import { ToDoData } from "./todo.data";



export class ToDoService {
  // TODO: Refactor to https://rxjs.dev/api/index/class/BehaviorSubject
  private todoArray: ToDoData[] = [];
  filter: string = "All"

  addToDo(name: string) {
    // TODO: Move this model into class. Something like new Todo(name)
    this.todoArray.push({ todoData: name, destroy: false, checked: false, dateCreate: new Date });
  }
  deleteToDo() {
    this.todoArray = this.todoArray.filter((elem) => {
      // TODO: Check if we can remove record by id
      return !elem.destroy
    });

  }
  getArray() {
    return this.todoArray;
  }
  filterArray() {
    if (this.filter === 'All') {
      return this.todoArray;
    } else if (this.filter === 'Active') {

      return this.todoArray.filter((elem) => elem.checked == false);
    } else {
      return this.todoArray.filter((elem) => elem.checked == true);
    }
  }
  clearArray() {
    this.todoArray = this.todoArray.filter((elem) => {
      return elem.checked ? false : true;
    });
  }
  toggleAll(countActive: number, countCompleted: number) {
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
  sortAsc() {
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
  sortDesc() {

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

}
