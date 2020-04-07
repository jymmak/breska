import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewInit {
  public images: Array<any>;
  mySwiper: Swiper;

  constructor() { }

  ngOnInit(): void {
    this.images = [
      'assets/images/image1.jpg',
      'assets/images/image2.jpg',
      'assets/images/image3.jpg',
      'assets/images/image6.jpg',
    ];

  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    })
  }



}
