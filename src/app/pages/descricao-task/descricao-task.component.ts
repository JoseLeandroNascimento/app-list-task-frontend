import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-descricao-task',
  templateUrl: './descricao-task.component.html',
  styleUrls: ['./descricao-task.component.css']
})
export class DescricaoTaskComponent implements OnInit {

  public task:Task = <Task>{};

  constructor(
    private taskService:TaskService,
    private activatedRouter:ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRouter.paramMap.subscribe(params=>{

      const idTask:string|null = params.get("id_task");

      if(idTask){

        this.taskService.findOne(idTask).subscribe({
          next:(data:Task)=>{
            this.task = data;
          }
        })

      }
    })
  }

}
