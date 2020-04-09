import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
    declarations: [
        ProductsComponent
  
    ],
    imports: [
        CommonModule,
        SharedModule,
        ProductRoutingModule,
        MaterialModule
    ]
})
export class ProductModule { }
