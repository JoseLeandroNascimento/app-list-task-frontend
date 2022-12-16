import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTaskComponent } from './component/list-task/list-task.component';
import { MyTasksComponent } from './pages/my-tasks/my-tasks.component';
import { ModalMessageComponent } from './component/modal-message/modal-message.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTasksComponent,
    ListTaskComponent,
    ModalMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
