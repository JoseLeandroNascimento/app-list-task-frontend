import { Injectable } from '@angular/core';
import { URL_API } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import { Task } from '../model/task';
import { TaskUpdateDto } from '../model/dto/task-update-dto';
import { TaskCreateDto } from '../model/dto/task-create-dto';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private URL = `${URL_API}/task`

  constructor(
    private http:HttpClient
  ) { }


  public findAll(): Observable<Task[]>{

    return this.http.get<Task[]>(this.URL).pipe(
      res=>res,
      err=>err
    )
  }

  public update(task:TaskUpdateDto,id:number):Observable<Task>{

    return this.http.patch<Task>(`${this.URL}/${id}`,task).pipe(
      res=>res,
      err=>err
    )
  }

  public create(body:TaskCreateDto):Observable<Task>{

    return this.http.post<Task>(this.URL,body).pipe(
      res=>res,
      error=>error
    )
  }

  public findOne(id:string):Observable<Task>{

    return this.http.get<Task>(`${this.URL}/${+id}`).pipe(
      res=>res,
      error=>error
    )
  }
}
