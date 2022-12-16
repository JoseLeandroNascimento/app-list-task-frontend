import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  public tasks: Task[] = []

  constructor(
    private taskService:TaskService
  ) { }

  ngOnInit(): void {

    this.loadData()
  }

  public loadData(){
    this.taskService.findAll().subscribe({
      next:(tasks)=>{this.tasks=tasks}
    })
  }

  public showState(task:Task){


    const taskUpdateState = {...task,isFinished: !task.isFinished}

    this.update(taskUpdateState);

  }

  public update(task:Task){

    const body = {...task,id:undefined}
    const id = task.id

    this.taskService.update(body,id).subscribe({
      next:(task:Task)=>{
      
      },
      error:()=>{
        
      },
      complete:()=>{
        this.loadData()
      }
    })


  }

}
