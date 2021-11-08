import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {

  public groomBankDetails = [{name: "김황호", bank: "우리은행", number: "1002-234-660543"}, {name: "김기황", bank: "농협은행", number: "146-12-028354"}];
  public brideBankDetails = [{name: "심아람", bank: "SC제일은행", number: "102-20-250764"}];

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
