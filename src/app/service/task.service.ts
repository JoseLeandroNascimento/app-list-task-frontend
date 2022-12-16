import { Injectable } from '@angular/core';
import { URL_API } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import { Task } from '../model/task';

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

  public update(task:any,id:number):Observable<Task>{

    return this.http.patch<Task>(`${this.URL}/${id}`,task).pipe(
      res=>res,
      err=>err
    )
  }
}
