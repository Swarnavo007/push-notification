import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Post} from './model/counter.model';
import * as PostCounter from './action/counter.action';

interface AppState{
  post:Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  post:Observable<Post>;

  constructor(private store:Store<AppState>){
    this.post=this.store.select('post');
  }

  upCount(){
    this.store.dispatch(new PostCounter.Upcounter());
  }

  downCount(){
    this.store.dispatch(new PostCounter.Downcounter());
  }

  reset(){
    this.store.dispatch(new PostCounter.Reset());
  }

  notifyMe() {
    
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    }
  
    
    else if (Notification.permission === "granted") {
      var notification = new Notification("Hello, you successfully logged in");
    }
  
    
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        if (permission === "granted") {
          var notification = new Notification("Hi there!");
        }
      });
    }
  
  }
}
