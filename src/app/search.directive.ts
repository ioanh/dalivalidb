import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';
import { api } from './services/freeapi.service';
import { AppState } from './store/models/app-state.model';
import {Store} from '@ngrx/store'
import { GetWeatherAction } from './store/actions/weather.actions';

@Directive({
  selector: '[appSearch]',
  host: {"(input)": 'onInputChange($event)'}
})
export class SearchDirective {

  constructor(private API: api, private element: ElementRef, private renderer: Renderer2, private store: Store<AppState> ) { }

  @HostBinding('innerHTML') query: string;

  onInputChange(){
    this.API.queryChanged.emit(this.element.nativeElement.value)

    this.store.dispatch(new GetWeatherAction(this.element.nativeElement.value))
    //console.log(this.element.nativeElement.value)
  }

}
