import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor( 
    private elementeRef: ElementRef,
    private renderer: Renderer2
    ) {
    console.log(elementeRef)
    //elementeRef.nativeElement.style.backgroundColor = 'yellow';
    this.renderer.setStyle(this.elementeRef.nativeElement, 'backgroundColor', 'yellow')
    this.renderer.setStyle(this.elementeRef.nativeElement, 'fontSize', '20px')
  }

}
