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
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    }
  
    // Let's check whether notification permissions have alredy been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification("Hello, you successfully logged in");
    }
  
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification("Hi there!");
        }
      });
    }
  
    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.
  }
}
