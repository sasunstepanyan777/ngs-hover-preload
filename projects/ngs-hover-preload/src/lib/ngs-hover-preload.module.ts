import { NgModule } from '@angular/core';

import { NgsHoverPreloadStrategy } from './ngs-hover-preload-strategy';
import { NgsPreloadOnHoverDirective } from './ngs-preload-on-hover.directive';

@NgModule({
  declarations: [NgsPreloadOnHoverDirective],
  imports: [],
  exports: [NgsPreloadOnHoverDirective, NgsHoverPreloadStrategy],
})
export class NgsHoverPreloadModule {}
