import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FashionChildrenComponent } from './components/fashion-children/fashion-children.component';


const routes: Routes = [
  {
    path: '',
    component: FashionChildrenComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductChildrenRoutingModule { }
