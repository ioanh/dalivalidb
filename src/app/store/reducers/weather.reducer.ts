import {weatherAPImodel} from '../../services/weatherAPImodel'
import { weatherActionTypes, WeatherAction } from '../actions/weather.actions'

export interface WeatherState {
    weather: weatherAPImodel[],
    loading: boolean,
    error: Error
}

const initialState = {
    weather: [],
    loading: false,
    error: undefined
}

export function WeatherReducer(state: WeatherState = initialState, action: WeatherAction){
    switch(action.type){
        case weatherActionTypes.GET_WEATHER:
            return { 
                ...state,
                loading: true
            }
        case weatherActionTypes.GET_WEATHER_SUCESS:
            return {
                ...state,
                weather: [action.payload],
                loading: false
            }
        case weatherActionTypes.GET_WEATHER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload 
            }
    }
}