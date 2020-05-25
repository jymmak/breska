import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product/product.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products = [];
  displayedColumns: string[] = ['id', 'name', 'price', 'actions']
  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }
  deleteProduct(id: number) {
    this.productsService.deleteProduct(id).subscribe(rta => {
      this.fetchProducts();
      console.log(rta);
    });
  }
}
