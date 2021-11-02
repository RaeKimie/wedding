import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  public words = ['이','제','서','로', ', ', '평','생', '함', '께'];
  constructor() { }

  ngOnInit(): void {
  }

}
