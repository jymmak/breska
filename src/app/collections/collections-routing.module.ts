import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WomenComponent } from './components/women/women.component';
import { MenComponent } from './components/men/men.component';
import { AccComponent } from './components/acc/acc.component';
import { ChildrenComponent } from './components/children/children.component';
import { NewsComponent } from './components/news/news.component';


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
