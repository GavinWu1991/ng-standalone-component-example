import {AfterViewChecked, Directive, ElementRef, NgModule, ViewContainerRef} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appSayHello]'
})
export class SayHelloDirective {

  constructor(private readonly _viewContainerRef: ViewContainerRef) {
    this._viewContainerRef.element.nativeElement.innerHTML = "Hello Standalone Component!"
  }

}
