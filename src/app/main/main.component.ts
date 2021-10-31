import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public words = ["01", "月", "08", "日"];
  constructor() { }

  ngOnInit(): void {
  }

}
