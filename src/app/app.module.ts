import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTaskComponent } from './component/list-task/list-task.component';
import { MyTasksComponent } from './pages/my-tasks/my-tasks.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { FormTaskComponent } from './component/form-task/form-task.component';
import { FormsModule } from '@angular/forms';
import { DescricaoTaskComponent } from './pages/descricao-task/descricao-task.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTasksComponent,
    ListTaskComponent,
    AddTaskComponent,
    FormTaskComponent,
    DescricaoTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
