import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../../Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:3000/task';

  constructor(private http: HttpClient) { }

  getTask(): Observable<Tarefa[]>{

    return this.http.get<Tarefa[]>(this.apiUrl);

  }

}
