import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fashion-children',
  templateUrl: './fashion-children.component.html',
  styleUrls: ['./fashion-children.component.scss']
})
export class FashionChildrenComponent implements OnInit {

  public mainProducts: Array<any>;
  constructor() { }

  ngOnInit(): void {
    this.mainProducts = [
      {
        id: 1,
        title: "Conjunto Zoo ",
        price: "12",
        image: "assets/images/image8.jpg",

      }
    ]
  }
}
