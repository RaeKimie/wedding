import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public mainContacts = [{name: "신랑에게 연락하기", iconColor: "blue", tel:'01044598015'}, {name: "신부에게 연락하기", iconColor: "pink", tel:'01089080062'}]
  public brideContacts = [{name: "아버지 심기출", iconColor: "blue", tel:'01002110062'}, {name: "어머니 김혜숙", iconColor: "pink", tel:'01049450662'}]
  public groomContacts = [{name: "아버지 김기황", iconColor: "blue", tel:'01066768016'}, {name: "어머니 김영자", iconColor: "pink", tel:'01022289334'}]
  constructor() { }

  ngOnInit(): void {
  }

}
