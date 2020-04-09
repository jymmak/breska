import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductWomanRoutingModule } from './product-woman-routing.module';
import { FashionWomanComponent } from './components/fashion-woman/fashion-woman.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    FashionWomanComponent
  ],
  imports: [
    CommonModule,
    ProductWomanRoutingModule,
    MaterialModule
  ]
})
export class ProductWomanModule { }
