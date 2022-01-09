import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature1Component } from './feature1.component';
import { Feature1RoutingModule } from './feature1-routing.module';
import { NgsHoverPreloadModule } from 'ngs-hover-preload';

@NgModule({
  declarations: [Feature1Component],
  imports: [
    CommonModule,
    NgsHoverPreloadModule.forChild(),
    Feature1RoutingModule,
  ],
})
export class Feature1Module {}
