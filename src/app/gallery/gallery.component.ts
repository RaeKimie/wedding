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
    this.selectedImg = img;
  }
  
  public changeSelectImg(index: number) {
    if (index !== this.selectedImg) {
      this.selectedImg = index;
    }
  }
}
