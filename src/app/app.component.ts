import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'todo-client';

  constructor(private todoService: TodoService) {}

  ngOnInit() {

    this.todoService.getToDos().subscribe(data => {
      console.log(data);
    })

  }

}
