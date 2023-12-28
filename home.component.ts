import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name:string="GLORY";

  amount: number =567;

  date= new Date();

  constructor() { }

  ngOnInit() {
  }

}
