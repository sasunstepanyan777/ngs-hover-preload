import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgsHoverPreloadModule } from 'ngs-hover-preload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgsHoverPreloadModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
