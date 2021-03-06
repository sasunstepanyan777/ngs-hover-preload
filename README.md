# ngs-hover-preload

This package provides a `PreloadingStrategy`, which will preload a lazy-loaded route on mouse over a corresponding router link.

## Usage

Install the module:

```
npm i ngs-hover-preload
```

Add `NgsHoverPreloadModule.forRoot()` in your `AppModule` and `NgsHoverPreloadModule.forChild()` in your lazy-loaded modules to ensure the required directives are available:

```ts
// ...
import { NgsHoverPreloadModule } from "ngs-hover-preload";

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    // ...
    NgsHoverPreloadModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

```ts
// ...
import { NgsHoverPreloadModule } from "ngs-hover-preload";

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    // ...
    NgsHoverPreloadModule.forChild(),
  ],
})
export class FeatureModule {}
```

Add `ngsPreloadOnHover` directive to all your `routerLink`s with the value of the link:

```html
<a routerLink="feature1" ngsPreloadOnHover="feature1">Feature1</a>
```

Don't forget to set the `NgsHoverPreloadStrategy` as your `preloadStrategy`:

```ts
// ...
import { NgsHoverPreloadStrategy } from "ngs-hover-preload";

@NgModule({
  // ...
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: NgsHoverPreloadStrategy,
    }),
  ],
})
export class AppModule {} // or AppRoutingModule
```

## License

MIT
