import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FashionManComponent } from './components/fashion-man/fashion-man.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


const routes: Routes = [
  {
    path: '',
    component: FashionManComponent
  },
  {
    path: ':id',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManRoutingModule { }
