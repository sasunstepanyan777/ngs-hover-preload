import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Feature1Component } from './feature1.component';

const routes: Routes = [
  {
    path: '',
    component: Feature1Component,
  },
  {
    path: 'feature-nested',
    loadChildren: () =>
      import('./feature-nested/feature-nested.module').then(
        (m) => m.FeatureNestedModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feature1RoutingModule {}
