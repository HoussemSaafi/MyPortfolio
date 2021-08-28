import { Component } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(pageScrollService: NgxPageScrollModule){

  }
}