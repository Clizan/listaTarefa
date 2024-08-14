import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Tarefa } from '../../../Tarefa';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {

  tarefas: Tarefa[] = []; 

  constructor(private taskService: TaskService){}

  ngOnInit(): void{

    this.taskService.getTask().subscribe((dado) => {

      this.tarefas = dado;

      console.log(dado);

    });

  }

}
