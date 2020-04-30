import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public mainProducts: Array<any>;
  constructor() { }

  ngOnInit(): void {
    this.mainProducts = [
      {
        id: 1,
        title: 'Blusa Camila',
        price: '12',
        image: 'assets/images/image3.jpg',

      },
      {
        id: 2,
        title: 'Blusa Camila',
        price: '12',
        image: 'assets/images/image4.jpg',

      },
      {
        id: 3,
        title: 'Blusa Camila',
        price: '12',
        image: 'assets/images/image1.jpg',

      },
      {
        id: 4,
        title: 'Blusa Camila',
        price: '12',
        image: 'assets/images/image2.jpg',

      },
      {
        id: 5,
        title: 'Blusa Camila',
        price: '12',
        image: 'assets/images/image1.jpg',

      }
      ,
      {
        id: 6,
        title: 'Blusa Camila',
        price: '12',
        image: 'assets/images/image1.jpg',

      },
      {
        id: 7,
        title: 'Blusa Camila',
        price: '12',
        image: 'assets/images/image2.jpg',

      },
      {
        id: 8,
        title: 'Blusa Camila',
        price: '12',
        image: 'assets/images/image1.jpg',

      }
      ,
      {
        id: 9,
        title: 'Blusa Camila',
        price: '12',
        image: 'assets/images/image2.jpg',

      },
      {
        id: 10,
        title: 'Blusa Camila',
        price: '12',
        image: 'assets/images/image1.jpg',

      }
      ,
      {
        id: 11,
        title: 'Blusa Camila',
        price: '12',
        image: 'assets/images/image1.jpg',

      },
      {
        id: 12,
        title: 'Blusa Camila',
        price: '12',
        image: 'assets/images/image2.jpg',

      },
      {
        id: 13,
        title: 'Blusa Camila',
        price: '12',
        image: 'assets/images/image1.jpg',

      }, {
        id: 14,
        title: 'Blusa Camila',
        price: '12',
        image: 'assets/images/image3.jpg',

      },
      {
        id: 15,
        title: 'Blusa Camila',
        price: '12',
        image: 'assets/images/image4.jpg',

      },
      {
        id: 16,
        title: 'Blusa Camila',
        price: '12',
        image: 'assets/images/image1.jpg',

      }
    ];
  }

}
