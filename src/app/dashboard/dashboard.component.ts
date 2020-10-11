import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  buttonOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  toogleFilter(event:string){
    if(event === 'open')
      this.buttonOpen = true;
    else
      this.buttonOpen = false;
  }

}
