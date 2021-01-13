import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validator, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor(private fb:FormBuilder,private _service:CommonService) { }

  public details=[];

  createForm=this.fb.group({
    task:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9]*$/)]]
  })

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.createForm.value);
    this._service.createTasks(this.createForm.value);
  }

}
