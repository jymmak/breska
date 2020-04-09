import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fashion-man',
  templateUrl: './fashion-man.component.html',
  styleUrls: ['./fashion-man.component.scss']
})
export class FashionManComponent implements OnInit {
  public mainProducts: Array<any>;
  constructor() { }

  ngOnInit(): void {
    this.mainProducts = [
      {
        id: 1,
        title: "Casaca Camilo",
        price: "12",
        image: "assets/images/man-image.jpg",

      }
    ]
  }
}
