import {Action} from '@ngrx/store'
import {weatherAPImodel} from '../../services/weatherAPImodel'

export enum weatherActionTypes {
    GET_WEATHER = '[WEATHER] Get Weather Action',
    GET_WEATHER_SUCESS = '[WEATHER] Get Weather Success Action',
    GET_WEATHER_FAILURE = '[WEATHER] Get Weather Failure Action'
}

export class GetWeatherAction implements Action {
    readonly type = weatherActionTypes.GET_WEATHER

    constructor(private payload: string) {}
}

export class GetWeatherSuccessAction implements Action {
    readonly type = weatherActionTypes.GET_WEATHER_SUCESS

    constructor(private payload: weatherAPImodel) {}
}

export class GetWeatherFailureAction implements Action {
    readonly type = weatherActionTypes.GET_WEATHER_FAILURE

    constructor(private payload: Error){}
}

export type WeatherAction = GetWeatherAction | GetWeatherSuccessAction | GetWeatherFailureAction 