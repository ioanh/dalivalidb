import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class api {
    constructor(private httpclinet: HttpClient) {}
    getapi(): Observable<any>{ 
        
        return this.httpclinet.get(`http://api.openweathermap.org/data/2.5/weather?q=Dolna%20Banya&appid=70c110dbd331e0f14f9cd29f78c32ff0`)
    }
    
}
