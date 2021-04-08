import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class api {

    constructor(private httpclinet: HttpClient) {}
    getWeatherAPI(): Observable<any>{ 
        return this.httpclinet.get(`api.openweathermap.org/data/2.5/weather?q=London&appid=70c110dbd331e0f14f9cd29f78c32ff0`)
    }
    
}