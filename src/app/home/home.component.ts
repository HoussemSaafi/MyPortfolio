import { Component, OnInit } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(pageScrollService: NgxPageScrollModule) { }

  ngOnInit(): void {
  }

}
