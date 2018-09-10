import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wf等待花开';
  nowDate: any;
  constructor() {
  	this.nowDate = new Date();
  	setInterval(() => {
  		this.nowDate = new Date();
  	}, 1000);
  }
}
