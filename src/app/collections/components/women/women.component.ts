import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {

  public mainProducts: Array<any>;
  constructor() { }

  ngOnInit(): void {
    this.mainProducts = [
      {
        id: 1,
        title: 'Blusa Camila',
        price: '12',
        image: 'assets/images/image1.jpg',

      },
      {
        id: 2,
        title: 'Blusa Camila',
        price: '12',
        image: 'assets/images/image6.jpg',

      },
      {
        id: 3,
        title: 'Blusa Camila',
        price: '12',
        image: 'assets/images/image7.jpg',

      }
    ]
  }


}
