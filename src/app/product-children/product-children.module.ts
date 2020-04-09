import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductChildrenRoutingModule } from './product-children-routing.module';
import { FashionChildrenComponent } from './components/fashion-children/fashion-children.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [FashionChildrenComponent],
  imports: [
    CommonModule,
    ProductChildrenRoutingModule,
    MaterialModule
  ]
})
export class ProductChildrenModule { }
