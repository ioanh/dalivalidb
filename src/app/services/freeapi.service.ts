import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class api {
    constructor(private httpclinet: HttpClient) {}
    getapi(query: string = 'Dolna%20Banya'): Observable<any>{ 
        
        return this.httpclinet.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=70c110dbd331e0f14f9cd29f78c32ff0`)
    }
    
}
