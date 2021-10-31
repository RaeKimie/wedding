import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  public words = ["예", "쁘", "게","잘","살","겠","습","니","다"];
  public words2 = ["W", "E", "D", "D", "I", "N", "G", " ", "D", "A", "Y"];

  constructor() { }

  ngOnInit(): void {
  }

}
