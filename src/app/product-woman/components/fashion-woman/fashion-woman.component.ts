import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fashion-woman',
  templateUrl: './fashion-woman.component.html',
  styleUrls: ['./fashion-woman.component.scss']
})
export class FashionWomanComponent implements OnInit {
  public mainProducts: Array<any>;
  constructor() { }

  ngOnInit(): void {
    this.mainProducts = [
      {
        id: 1,
        title: "Blusa Camila",
        price: "12",
        image: "assets/images/image1.jpg",

      },
      {
        id: 2,
        title: "Blusa Camila",
        price: "12",
        image: "assets/images/image6.jpg",

      },
      {
        id: 3,
        title: "Blusa Camila",
        price: "12",
        image: "assets/images/image7.jpg",

      }
    ]
  }

}
