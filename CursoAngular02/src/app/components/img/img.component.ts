import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{

  img: string = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img =>' ,this.img);
  }

  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = '../../../assets/default.png';

  /*

  counter = 0;
  counterFn: number | undefined;
*/

  constructor() {
    //Corre antes del render
    //Es lo que corre desde el inicio y crea el componente
    //No se debe correr cosas asincronas
    console.log('contructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    //Las veces que se actualize cada vez que se actualize el render
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log(changes)
  }

  ngOnInit(): void {
    //Aqui vienen todas las llamadas a servidores y API
    //Aqui sol ose renderiza una sola vez
    // before render
    // async - fetch -- once time
    console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('run counter');
    // }, 1000);
  }


  ngAfterViewInit() {
    //Aqui corre despues del render
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    //Elimina el componente
    console.log('ngOnDestroy');
    /*
    window.clearInterval(this.counterFn);
    */
  }


  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }


}
