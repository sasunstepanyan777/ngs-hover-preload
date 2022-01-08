import { NgModule } from '@angular/core';

import { NgsHoverPreloadService } from './ngs-hover-preload.service';
import { NgsPreloadOnHoverDirective } from './ngs-preload-on-hover.directive';

@NgModule({
  declarations: [NgsPreloadOnHoverDirective],
  providers: [NgsHoverPreloadService],
  imports: [],
  exports: [NgsPreloadOnHoverDirective],
})
export class NgsHoverPreloadModule {}
