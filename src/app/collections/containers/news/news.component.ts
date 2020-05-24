import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  products: Product[];
  public mainProducts: Array<any>;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }


  fetchProducts() {
    this.productService.getAllProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

}
