import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-transportes',
  templateUrl: './transportes.component.html',
  styleUrls: ['./transportes.component.scss']
})
export class TransportesComponent implements OnInit {

  btn_1: boolean = false;
  btn_2: boolean = false;
  btn_3: boolean = false;
  btn_4: boolean = false;


  @ViewChild('eyelash1', { static: true }) eyelash1: ElementRef;
  @ViewChild('eyelash2', { static: true }) eyelash2: ElementRef;
  @ViewChild('eyelash3', { static: true }) eyelash3: ElementRef;
  @ViewChild('eyelash4', { static: true }) eyelash4: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.eyelash1.nativeElement.classList.add('selected');
    this.btn_1 = true;
  }

  selectEyelash1(){
    this.btn_1 = true;
    this.btn_2 = false;
    this.btn_3 = false;
    this.btn_4 = false;
    this.eyelash1.nativeElement.classList.add('selected');
    this.eyelash2.nativeElement.classList.remove('selected');
    this.eyelash3.nativeElement.classList.remove('selected');
    this.eyelash4.nativeElement.classList.remove('selected');
  }
  selectEyelash2(){
    this.btn_1 = false;
    this.btn_2 = true;
    this.btn_3 = false;
    this.btn_4 = false;
    this.eyelash1.nativeElement.classList.remove('selected');
    this.eyelash2.nativeElement.classList.add('selected');
    this.eyelash3.nativeElement.classList.remove('selected');
    this.eyelash4.nativeElement.classList.remove('selected');
  }
  selectEyelash3(){
    this.btn_1 = false;
    this.btn_2 = false;
    this.btn_3 = true;
    this.btn_4 = false;
    this.eyelash1.nativeElement.classList.remove('selected');
    this.eyelash2.nativeElement.classList.remove('selected');
    this.eyelash3.nativeElement.classList.add('selected');
    this.eyelash4.nativeElement.classList.remove('selected');
  }
  selectEyelash4(){
      this.btn_1 = false;
      this.btn_2 = false;
      this.btn_3 = false;
      this.btn_4 = true;
      this.eyelash1.nativeElement.classList.remove('selected');
      this.eyelash2.nativeElement.classList.remove('selected');
      this.eyelash3.nativeElement.classList.remove('selected');
      this.eyelash4.nativeElement.classList.add('selected');
    
  }
}
