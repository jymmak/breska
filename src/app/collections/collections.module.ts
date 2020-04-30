import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { WomenComponent } from './components/women/women.component';
import { MaterialModule } from '../material/material.module';
import { MenComponent } from './components/men/men.component';
import { NewsComponent } from './components/news/news.component';
import { AccComponent } from './components/acc/acc.component';
import { ChildrenComponent } from './components/children/children.component';


@NgModule({
  declarations: [WomenComponent, MenComponent, NewsComponent, AccComponent, ChildrenComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    MaterialModule
  ]
})
export class CollectionsModule { }
