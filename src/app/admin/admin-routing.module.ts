import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';


const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'product/create',
        component: CreateProductComponent
      },
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'products-list',
        component: ProductsListComponent
      },
      {
        path: 'product/edit/:id',
        component: ProductEditComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
