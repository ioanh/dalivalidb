import { Component } from '@angular/core';
import{weatherAPI} from './services/weatherAPImodel'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dalivalidb';
}

console.log(weatherAPI);