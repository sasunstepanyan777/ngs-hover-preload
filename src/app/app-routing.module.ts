import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgsHoverPreloadStrategy } from 'ngs-hover-preload';

const routes: Routes = [
  {
    path: 'feature1',
    loadChildren: () =>
      import('./feature1/feature1.module').then((m) => m.Feature1Module),
  },
  {
    path: 'feature2',
    loadChildren: () =>
      import('./feature2/feature2.module').then((m) => m.Feature2Module),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: NgsHoverPreloadStrategy,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
