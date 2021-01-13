import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {IUser} from './user';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  public tasks=[];

  getTasks(){
    return this.tasks;
  }

  createTasks(info){
    return this.tasks.push(info);
  }

  getExternal(){
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/posts').pipe(
      map(data=>data.splice(0,20))
    )
  }
}
