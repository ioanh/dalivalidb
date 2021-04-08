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

  ngOnInit(){
    this._api.getapi()

    .subscribe
    (
      data=>{
        this.LondonWeather = data;
      }
    );
  }
}
