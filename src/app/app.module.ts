import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTaskComponent } from './component/list-task/list-task.component';
import { MyTasksComponent } from './pages/my-tasks/my-tasks.component';
import { ModalMessageComponent } from './component/modal-message/modal-message.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { FormTaskComponent } from './component/form-task/form-task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyTasksComponent,
    ListTaskComponent,
    ModalMessageComponent,
    AddTaskComponent,
    FormTaskComponent
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
