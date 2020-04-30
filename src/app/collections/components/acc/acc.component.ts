import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acc',
  templateUrl: './acc.component.html',
  styleUrls: ['./acc.component.scss']
})
export class AccComponent implements OnInit {

  public mainProducts: Array<any>;
  constructor() { }

  ngOnInit(): void {
    this.mainProducts = [
      {
        id: 1,
        title: 'Ganchos Dafne',
        price: '12',
        image: 'assets/images/image3.jpg',

      },
      {
        id: 2,
        title: 'Taza Amor',
        price: '12',
        image: 'assets/images/image4.jpg',

      },
      {
        id: 3,
        title: 'Ganchos Caramelo',
        price: '12',
        image: 'assets/images/image9.jpg',

      }
    ];
  }

}
