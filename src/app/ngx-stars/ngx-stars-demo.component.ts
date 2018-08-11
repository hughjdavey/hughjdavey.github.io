import { Component } from '@angular/core';

@Component({
  templateUrl: './ngx-stars-demo.component.html',
  styleUrls: ['./ngx-stars-demo.component.css']
})
export class NgxStarsDemoComponent {

  ratingExample = 0;

  onRatingSet(rating: number): void {
    this.ratingExample = rating;
  }
}
