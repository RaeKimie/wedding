import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FullScreenComponent } from '../full-screen/full-screen.component';

@Component({
  selector: 'app-expanded-photo',
  templateUrl: './expanded-photo.component.html',
  styleUrls: ['./expanded-photo.component.scss']
})
export class ExpandedPhotoComponent implements OnInit {

  @Input()
  public img!: number;

  @Output() changeSelectImg = new EventEmitter<number>();

  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void {
  }

  public openDialog() {
    this.dialogRef.open(FullScreenComponent);
  }

  public moveLeft() {
    if (this.img > 0) {
      this.changeSelectImg.emit(this.img - 1);
    }
  }

  public moveRight() {
    if (this.img < 30) {
      this.changeSelectImg.emit(this.img + 1);
    }
  }

}
