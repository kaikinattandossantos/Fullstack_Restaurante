import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-header',
  templateUrl: './restaurant-header.html',
  styleUrls: ['./restaurant-header.css']
})
export class RestaurantHeaderComponent {
  @Input() restaurant: any;
}