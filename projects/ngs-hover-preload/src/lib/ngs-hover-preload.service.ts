import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NgsHoverPreloadService {
  preloadingSubject$ = new Subject<string>();

  preload(path: string) {
    this.preloadingSubject$.next(path);
  }
}
