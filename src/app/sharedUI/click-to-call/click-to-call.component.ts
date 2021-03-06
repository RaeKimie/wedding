import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-to-call',
  templateUrl: './click-to-call.component.html',
  styleUrls: ['./click-to-call.component.scss']
})
export class ClickToCallComponent implements OnInit {
  @Input()
  tel!: string;
  @Input()
  iconColor!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
