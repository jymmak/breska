import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './containers/news/news.component';
import { WomenComponent } from './containers/women/women.component';
import { MenComponent } from './containers/men/men.component';
import { ChildrenComponent } from './containers/children/children.component';
import { AccComponent } from './containers/acc/acc.component';




const routes: Routes = [

  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'women',
    component: WomenComponent
  },
  {
    path: 'men',
    component: MenComponent
  },
  {
    path: 'children',
    component: ChildrenComponent
  },
  {
    path: 'acc',
    component: AccComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
