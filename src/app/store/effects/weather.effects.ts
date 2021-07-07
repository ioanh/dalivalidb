import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { api } from 'src/app/services/freeapi.service';
import { GetWeatherAction, GetWeatherFailureAction, GetWeatherSuccessAction, weatherActionTypes } from '../actions/weather.actions';
import { of } from 'rxjs';

@Injectable()

export class WeatherEffects {
    constructor(private weatherService: api, private actions$: Actions ) {}


    loadWeather$ = createEffect(() => {
        return this.actions$
        .pipe(
          ofType<GetWeatherAction>(weatherActionTypes.GET_WEATHER),
          mergeMap  (
              (action) => this.weatherService.getapi(action.payload)
              .pipe(
                  map(data => new GetWeatherSuccessAction(data)),
                  catchError(error => of(new GetWeatherFailureAction(error)))
              )
          )
        )
    })
}