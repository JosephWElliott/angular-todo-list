import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTodoName: string = '';
  todos: string[] = [];
  title: string = 'practice';
  errorMessage: string = '';

  addTodo() {
    if (this.newTodoName.trim() !== '') {
      this.todos.push(this.newTodoName);
      this.newTodoName = '';
      this.errorMessage = '';  // Clear error message if any
    } else {
      this.errorMessage = 'To-do name cannot be empty.';
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}