import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FashionWomanComponent } from './components/fashion-woman/fashion-woman.component';


const routes: Routes = [
  {
    path: '',
    component: FashionWomanComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductWomanRoutingModule { }
