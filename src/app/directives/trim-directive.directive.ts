import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[trim]'
})
export class TrimDirective {

  constructor(private elementRef: ElementRef) {

  }
  @HostListener("blur") onBlur() {
    this.elementRef.nativeElement.value = this.elementRef.nativeElement.value.trim();
  }
  @HostListener("keyup.enter") onKeyUpEnter() {
    this.elementRef.nativeElement.value = this.elementRef.nativeElement.value.trim();
  }

}
