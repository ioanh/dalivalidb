import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';
import { api } from './services/freeapi.service';

@Directive({
  selector: '[appSearch]',
  host: {"(input)": 'onInputChange($event)'}
})
export class SearchDirective {

  constructor(private API: api, private element: ElementRef, private renderer: Renderer2 ) { }

  @HostBinding('innerHTML') query: string;

  onInputChange(){
    this.API.queryChanged.emit(this.element.nativeElement.value)
    console.log(this.element.nativeElement.value)
  }

}
