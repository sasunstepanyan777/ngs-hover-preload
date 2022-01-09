import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgsHoverPreloadStrategy } from './ngs-hover-preload-strategy';

import { NgsHoverPreloadService } from './ngs-hover-preload.service';
import { NgsPreloadOnHoverDirective } from './ngs-preload-on-hover.directive';

@NgModule({
  declarations: [NgsPreloadOnHoverDirective],
  imports: [],
  exports: [NgsPreloadOnHoverDirective],
})
export class NgsHoverPreloadModule {
  static forRoot(): ModuleWithProviders<NgsHoverPreloadModule> {
    return {
      ngModule: NgsHoverPreloadModule,
      providers: [NgsHoverPreloadService, NgsHoverPreloadStrategy],
    };
  }

  static forChild(): ModuleWithProviders<NgsHoverPreloadModule> {
    return { ngModule: NgsHoverPreloadModule };
  }
}
