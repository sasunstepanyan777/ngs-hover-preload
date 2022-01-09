import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureNestedRoutingModule } from './feature-nested-routing.module';
import { FeatureNestedComponent } from './feature-nested.component';


@NgModule({
  declarations: [
    FeatureNestedComponent
  ],
  imports: [
    CommonModule,
    FeatureNestedRoutingModule
  ]
})
export class FeatureNestedModule { }
