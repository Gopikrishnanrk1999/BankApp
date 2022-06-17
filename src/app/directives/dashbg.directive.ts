import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDashbg]'
})
export class DashbgDirective {

  constructor(private el:ElementRef) {
    console.log(el);
    el.nativeElement.style.backgroundColor='blue'
    
   }

}
