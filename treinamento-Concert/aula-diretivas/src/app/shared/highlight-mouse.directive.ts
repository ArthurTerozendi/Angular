import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseOut(){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'white');
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor( 
    private elementRef : ElementRef,
    private renderer : Renderer2
  ) { }

}
