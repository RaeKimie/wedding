import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public photos = Array.from(Array(31).keys());
  constructor() { }

  ngOnInit(): void {
  }

}
