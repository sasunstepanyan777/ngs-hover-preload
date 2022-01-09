import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureNestedComponent } from './feature-nested.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureNestedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureNestedRoutingModule {}
