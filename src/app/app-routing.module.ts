import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // Main redirect
      { path: '', redirectTo: '/home', pathMatch: 'full' },

      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      
      {
        path: 'fashion-woman',
        loadChildren: () => import('./product-woman/product-woman.module').then(m => m.ProductWomanModule)
      },
      {
        path: 'fashion-man',
        loadChildren: () => import('./product-man/product-man.module').then(m => m.ProductManModule)
      },
      {
        path: 'fashion-children',
        loadChildren: () => import('./product-children/product-children.module').then(m => m.ProductChildrenModule)
      },
      {
        path: 'prod-acc',
        loadChildren: () => import('./product-acc/product-acc.module').then(m => m.ProductAccModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
