import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import {api} from './services/freeapi.service';
import { SearchDirective } from './search.directive';
import { WeatherComponent } from './weather/weather.component';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import { WeatherReducer } from './store/reducers/weather.reducer';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './store/effects/weather.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SearchDirective,
    WeatherComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({weather: WeatherReducer}),
    EffectsModule.forRoot([WeatherEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [api],
  bootstrap: [AppComponent]
})
export class AppModule { }
