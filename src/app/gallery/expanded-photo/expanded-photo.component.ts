import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-expanded-photo',
  templateUrl: './expanded-photo.component.html',
  styleUrls: ['./expanded-photo.component.scss']
})
export class ExpandedPhotoComponent implements OnInit {

  @Input()
  public img!: number;

  @Output() changeSelectImg = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public moveLeft() {
    if (this.img > 0) {
      console.log(this.img,' what is it')
      this.changeSelectImg.emit(this.img - 1);
    }
  }

  public moveRight() {
    if (this.img < 30) {
      console.log(this.img,'show me')
      this.changeSelectImg.emit(this.img + 1);
    }
  }

}
