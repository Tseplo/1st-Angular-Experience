import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit, OnChanges {

  constructor() { }
  ngOnChanges(): void {

  }

  ratingNo: number = 10;
  pinakas: number[] = Array.from(Array(this.ratingNo).keys());
  ngOnInit(): void {
  }

}
