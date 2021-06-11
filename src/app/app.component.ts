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
  cityName: string;
  lon: number;
  lat: number;
  description: string;
  country: string;

  ngOnInit(){
    this._api.getapi()

    .subscribe
    (
      data=>{
        //FETCHING THE DATA 
        this.LondonWeather = data;
        this.updatingFrontend();
      }
    );

    //LISTENING TO QUERY CHANGE 
    this._api.queryChanged.subscribe(
      (query) =>{
        this._api.getapi(query).subscribe(
          data => {
            this.LondonWeather = data;
            this.updatingFrontend();
          }
        )
      }
    )
  }  

  updatingFrontend(){
    // TRANSFORMING THE DEGREES TO C and ROUNDING THEM 
    this.currentWeather = Math.round(this.LondonWeather.main.feels_like - 273.15);
    this.typeOfWeather = this.LondonWeather.weather[0].main
  
    //ADDING THE IMAGE PATH
    if(this.typeOfWeather == 'Mist' || this.typeOfWeather == 'Smoke' || this.typeOfWeather == 'Haze'|| this.typeOfWeather == 'Dust'|| this.typeOfWeather == 'Fog'|| this.typeOfWeather == 'Sand'|| this.typeOfWeather == 'Dust'|| this.typeOfWeather == 'Ash'|| this.typeOfWeather == 'Squall'|| this.typeOfWeather == 'Tornado' ){
      this.imagePath = `../assets/Snow.png`;
    }else{
      this.imagePath = `../assets/${this.typeOfWeather}.png`;
    }
  
    //GETTING THE CITY NAME 
    this.cityName = this.LondonWeather.name
  
    // GETTING THE COORDINATES
    this.lon = this.LondonWeather.coord.lon
    this.lat = this.LondonWeather.coord.lat
  
    //GETTING THE DESCRIPTION
    this.description = this.LondonWeather.weather[0].description
  
    //GETTING THE COUNTRY
    this.country = this.LondonWeather.sys.country
    //CW THE MODEL
    console.log(this.LondonWeather)
  }
}