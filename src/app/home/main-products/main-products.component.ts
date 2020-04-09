import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-products',
  templateUrl: './main-products.component.html',
  styleUrls: ['./main-products.component.scss']
})
export class MainProductsComponent implements OnInit {
  public mainProducts: Array<any>;
  constructor() { }

  ngOnInit(): void {
    this.mainProducts = [
      {
        id: 1,
        title: "Blusa Camila",
        price: "12",
        image: "assets/images/image3.jpg",

      },
      {
        id: 2,
        title: "Blusa Camila",
        price: "12",
        image: "assets/images/image4.jpg",

      },
      {
        id: 3,
        title: "Blusa Camila",
        price: "12",
        image: "assets/images/image1.jpg",

      },
      {
        id: 4,
        title: "Blusa Camila",
        price: "12",
        image: "assets/images/image2.jpg",

      },
      {
        id: 5,
        title: "Blusa Camila",
        price: "12",
        image: "assets/images/image1.jpg",

      }
      ,
      {
        id: 6,
        title: "Blusa Camila",
        price: "12",
        image: "assets/images/image1.jpg",

      },
      {
        id: 7,
        title: "Blusa Camila",
        price: "12",
        image: "assets/images/image2.jpg",

      },
      {
        id: 8,
        title: "Blusa Camila",
        price: "12",
        image: "assets/images/image1.jpg",

      }
    ]
  }

}
