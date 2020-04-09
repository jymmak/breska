import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManRoutingModule } from './product-man-routing.module';
import { FashionManComponent } from './components/fashion-man/fashion-man.component';
import { MaterialModule } from '../material/material.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


@NgModule({
  declarations: [
    FashionManComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductManRoutingModule,
    MaterialModule
  ]
})
export class ProductManModule { }
