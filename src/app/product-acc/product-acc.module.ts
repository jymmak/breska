import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductAccRoutingModule } from './product-acc-routing.module';
import { ProdAccComponent } from './component/prod-acc/prod-acc.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [ProdAccComponent],
  imports: [
    CommonModule,
    ProductAccRoutingModule,
    MaterialModule
  ]
})
export class ProductAccModule { }
