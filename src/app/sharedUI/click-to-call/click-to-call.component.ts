import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-to-call',
  templateUrl: './click-to-call.component.html',
  styleUrls: ['./click-to-call.component.scss']
})
export class ClickToCallComponent implements OnInit {
  public name = '김황호';
  public phoneNumber = '01089080062';

  constructor() { }

  ngOnInit(): void {
  }

}
