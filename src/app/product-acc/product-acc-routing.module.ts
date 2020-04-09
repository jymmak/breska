import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdAccComponent } from './component/prod-acc/prod-acc.component';


const routes: Routes = [
  {
    path: '',
    component: ProdAccComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductAccRoutingModule { }
