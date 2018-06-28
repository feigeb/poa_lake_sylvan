import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { HeaderAndAlertsComponent } from './header-and-alerts/header-and-alerts.component';


@NgModule({
  declarations: [
    AppComponent,
    SlideShowComponent,
    HeaderAndAlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
