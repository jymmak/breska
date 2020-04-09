import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewInit {
  public images: Array<any>;


  constructor() { }

  ngOnInit(): void {
    this.images = [
      'assets/images/image1.jpg',
      'assets/images/image2.jpg',
      'assets/images/image3.jpg',
      'assets/images/image4.jpg',
      'assets/images/image6.jpg',
      'assets/images/image7.jpg',
    ];

  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $('.slick').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: true,
        fade: true,
        responsive: true
      });
    });
  }
}
