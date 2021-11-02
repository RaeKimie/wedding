import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {

  public groomBankDetails = [{name: "홍길동", bank: "국민은행", number: "123-4567-8910"}, {name: "김동수", bank: "국민은행", number: "123-4567-8910"}];
  public brideBankDetails = [{name: "test", bank: "국민은행", number: "123-4567-8910"}, {name: "test", bank: "국민은행", number: "123-4567-8910"}];

  public groomExpanded = false;
  public brideExpanded = false;

  constructor() { }

  ngOnInit(): void {
  }

  public displayGroomBankDetails() {
    this.groomExpanded = !this.groomExpanded;
  }

  public displayBrideBankDetails() {
    this.brideExpanded = !this.brideExpanded;
  }

}
