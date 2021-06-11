import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import {api} from './services/freeapi.service';
import { SearchDirective } from './search.directive';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchDirective,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [api],
  bootstrap: [AppComponent]
})
export class AppModule { }
