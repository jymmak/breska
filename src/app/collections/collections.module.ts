import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { MaterialModule } from '../material/material.module';

import { ProductComponent } from './components/product/product.component';
import { NewsComponent } from './containers/news/news.component';
import { WomenComponent } from './containers/women/women.component';
import { MenComponent } from './containers/men/men.component';
import { AccComponent } from './containers/acc/acc.component';
import { ChildrenComponent } from './containers/children/children.component';


@NgModule({
  declarations: [WomenComponent, MenComponent, NewsComponent, AccComponent, ChildrenComponent, ProductComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    MaterialModule
  ]
})
export class CollectionsModule { }
