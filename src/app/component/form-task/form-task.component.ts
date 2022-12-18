import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskCreateDto } from 'src/app/model/dto/task-create-dto';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/service/task.service';
@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css'],
})
export class FormTaskComponent implements OnInit {
  registro: Task = <Task>{};
 

  constructor(
    private taskService: TaskService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((param) => {
      
      const idTask:string|null = param.get('id_task');

      if (!idTask) {
        this.registro.isFinished = false;
      } else {

        this.taskService.findOne(idTask).subscribe({
          next: (task: Task) => {
            this.registro = task;
          },
        });
      }
    });

   
  }

  public submit(form: NgForm) {
    if (!this.registro?.id) {
      const body: TaskCreateDto = { ...this.registro };

      this.taskService.create(body).subscribe({
        next: (res: Task) => {},
      });
    }
    form.resetForm();
  }
}
