import { Component, OnInit } from '@angular/core';
import{weatherAPImodel} from '../services/weatherAPImodel'
import {api} from '../services/freeapi.service'
import { AppState } from '../store/models/app-state.model';
import { Store } from '@ngrx/store';
import { GetWeatherAction } from '../store/actions/weather.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private _api: api, private store: Store<AppState>){ }

  ngRxWeather$: Observable<weatherAPImodel[]>;

  ngOnInit(){
    this.store.dispatch(new GetWeatherAction('Sofia'))
    this.ngRxWeather$ = this.store.select(store => store.weather.weather)
  }  

}
