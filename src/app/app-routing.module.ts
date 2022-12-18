import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { MyTasksComponent } from './pages/my-tasks/my-tasks.component';

const routes: Routes = [
  {path:"",component:MyTasksComponent},
  {path:"add-task",component:AddTaskComponent},
  {path:"editar_task/:id_task",component:AddTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
