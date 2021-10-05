import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public mainContacts = [{name: "신랑에게 연락하기", iconColor: "blue", tel:'01044598016'}, {name: "신부에게 연락하기", iconColor: "pink", tel:'01089080062'}]

  constructor() { }

  ngOnInit(): void {
  }

}
