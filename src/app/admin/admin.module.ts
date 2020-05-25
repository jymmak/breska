import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    NavigationComponent,
    CreateProductComponent,
    DashboardComponent,
    ProductEditComponent,
    ProductFormComponent,
    ProductsListComponent
  ],
  imports: [

    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    LayoutModule,
    FormsModule,
    CommonModule
  ]
})
export class AdminModule { }
