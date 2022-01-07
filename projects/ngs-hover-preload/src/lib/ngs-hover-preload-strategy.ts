import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { NgsHoverPreloadService } from './ngs-hover-preload.service';

@Injectable({
  providedIn: 'root',
})
export class NgsHoverPreloadStrategy extends PreloadingStrategy {
  constructor(private readonly ngsHoverPreloadService: NgsHoverPreloadService) {
    super();
  }

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return this.ngsHoverPreloadService.preloadingSubject$.pipe(
      mergeMap((path) => {
        if ([route.path, '*'].includes(path)) {
          return fn();
        } else {
          return EMPTY;
        }
      })
    );
  }
}
