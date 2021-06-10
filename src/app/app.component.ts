import { Component } from '@angular/core';
import{weatherAPImodel} from './services/weatherAPImodel'
import {api} from './services/freeapi.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dalivalidb';

  constructor(private _api: api){ }
  

  LondonWeather: weatherAPImodel;
  currentWeather: number;
  typeOfWeather: string;
  imagePath: string;

  ngOnInit(){
    this._api.getapi()

    .subscribe
    (
      data=>{
        //FETCHING THE DATA 
        this.LondonWeather = data;
        // TRANSFORMING THE DEGREES TO C and ROUNDING THEM 
        this.currentWeather = Math.round(this.LondonWeather.main.feels_like - 273.15);
        this.typeOfWeather = this.LondonWeather.weather[0].main
        //ADDING THE IMAGE PATH
        this.imagePath = `../assets/${this.typeOfWeather}.png`;
        //CW THE MODEL
        console.log(this.LondonWeather)
      }
    );
  }  
}