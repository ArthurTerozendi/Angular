import { AfterContentChecked, 
         AfterViewChecked, 
         AfterViewInit, 
         Component, 
         DoCheck,
         Input, 
         OnChanges, 
         OnDestroy, 
         OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.sass']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, OnDestroy, AfterViewChecked, AfterViewInit{

  @Input() valorInicial = 10;

  constructor() {
    this.log('constructor')
  }

  ngOnInit(): void {
    this.log('OnInit')
  }

  ngOnChanges() {
    this.log('OnChanges')
  }
  
  ngDoCheck(){
    this.log('DoCheck')
  }

  ngAfterContentChecked() {
    this.log('AfterContentChecked')
  }

  ngAfterViewChecked() {
    this.log('AfterViewChecked')
  }
  
  ngAfterViewInit() {
    this.log('AfterViewInit')
  }

  ngOnDestroy() {
    this.log('OnDestroy')
  }

  log(text) {
    console.log(text);
  }

}
