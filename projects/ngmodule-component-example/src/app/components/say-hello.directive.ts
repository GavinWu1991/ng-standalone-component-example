import {AfterViewChecked, Directive, ElementRef, NgModule, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appSayHello]'
})
export class SayHelloDirective {

  constructor(private readonly _viewContainerRef: ViewContainerRef) {
    this._viewContainerRef.element.nativeElement.innerHTML = "Hello Ng Module Component!"
  }

}

@NgModule({
  declarations: [SayHelloDirective],
  exports: [SayHelloDirective]
})
export class SayHelloModule {

}
