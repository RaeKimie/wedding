import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public photos = Array.from(Array(31).keys());
  public selectedImg: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  public selectImg(img: number) {
    console.log(img,' yoyo')
    this.selectedImg = img;
  }

}
