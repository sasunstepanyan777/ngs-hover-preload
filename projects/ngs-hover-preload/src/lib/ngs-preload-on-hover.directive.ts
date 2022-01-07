import { Directive, HostListener, Input } from '@angular/core';
import { NgsHoverPreloadService } from './ngs-hover-preload.service';

@Directive({
  selector: '[ngsPreloadOnHover]',
})
export class NgsPreloadOnHoverDirective {
  @Input('ngsPreloadOnHover') path: string = '';

  @HostListener('mouseover') onMouseEnter() {
    this.ngsHoverPreloadService.preload(this.path);
  }

  constructor(
    private readonly ngsHoverPreloadService: NgsHoverPreloadService
  ) {}
}
