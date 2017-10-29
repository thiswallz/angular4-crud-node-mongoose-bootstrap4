import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[validationDirective]'
})
export class ValidationDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }
  @Input() set validationDirective(control: boolean) {
    if(control===true){
      this.renderer.removeClass(this.el.nativeElement, 'is-invalid');
      this.renderer.addClass(this.el.nativeElement, 'is-valid');
    }
    else{
      this.renderer.removeClass(this.el.nativeElement, 'is-valid');
      this.renderer.addClass(this.el.nativeElement, 'is-invalid');
    }
      
  }

  ngOnInit() {

  }

}