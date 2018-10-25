import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import Todo from '../models/todo.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  api_url = "https://todo-app-server-v.herokuapp.com/api/todos";

  constructor(private http: HttpClient) { }

  createTodo(todo: Todo): Observable<any> {
    return this.http.post(this.api_url, todo);
  }

  getToDos(): Observable<any> {
    return this.http.get(this.api_url);
  }

  editTodo(todo: Todo): Observable<any> {

    let edit_url = `${this.api_url}/${todo._id}`;
    return this.http.put(edit_url, todo);
  }

  deleteTodo(todo: Todo): Observable<any> {

    let delete_url = `${this.api_url}/${todo._id}`;
    return this.http.delete(delete_url);
  }



}
