import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expanded-photo',
  templateUrl: './expanded-photo.component.html',
  styleUrls: ['./expanded-photo.component.scss']
})
export class ExpandedPhotoComponent implements OnInit {

  @Input()
  public img!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
