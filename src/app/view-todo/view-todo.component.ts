import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.scss']
})
export class ViewTodoComponent implements OnInit {

  constructor(private _service:CommonService) { }

  public tasks=[];
  public datas=[];

  ngOnInit(): void {

    this.tasks=this._service.getTasks()

    this._service.getExternal().subscribe(data=>{
      this.datas=data;
      console.log(this.datas);
    })

  }

  

}
