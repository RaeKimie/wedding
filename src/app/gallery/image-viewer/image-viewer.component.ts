import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {

  @Input()
  open!: boolean;
  @Input() img!: number;

  @Output() close = new EventEmitter();
  @Output() updatedSelectedImg = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public closeFullScreen() {
    this.close.emit(false);
  }

  public moveLeft() {
    if (this.img > 0) { 
      this.img = this.img - 1;
      this.updateExpandedImg();
    }
  }

  public moveRight() {
    if (this.img < 30) {
      this.img = this.img + 1;
      this.updateExpandedImg();
    }

  }

  private updateExpandedImg() {
    this.updatedSelectedImg.emit(this.img);
  }

}
