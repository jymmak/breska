import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-acc',
  templateUrl: './acc.component.html',
  styleUrls: ['./acc.component.scss']
})
export class AccComponent implements OnInit {
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
