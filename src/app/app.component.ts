import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
 
  // add(){
  //   this.title = "this is the session";
  //   localStorage.setItem("token", this.title)
  // }
}
