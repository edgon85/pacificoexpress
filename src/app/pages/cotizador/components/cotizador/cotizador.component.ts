import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.scss'],
})
export class CotizadorComponent implements OnInit {
  @ViewChild('eyelash1', { static: true }) eyelash1: ElementRef;
  @ViewChild('eyelash2', { static: true }) eyelash2: ElementRef;

  vehiculos: boolean = false;
  taller: boolean = false;

  telefono: string = '';
  leyenda: string = '';

  constructor() {}

  ngOnInit(): void {
    this.telefono = '12345678';
    this.leyenda = 'Especialistas en transporte refrigerado';
    this.eyelash1.nativeElement.classList.add('btnSelected');
    this.vehiculos = true;
  }

  selectEyelash1() {
    this.telefono = '12345678';
    this.leyenda = 'Especialistas en transporte refrigerado';
    this.vehiculos = true;
    this.taller = false;
    this.eyelash1.nativeElement.classList.add('btnSelected');
    this.eyelash2.nativeElement.classList.remove('btnSelected');
  }
  selectEyelash2() {
    this.telefono = '87654321';
    this.leyenda = 'Especialistas en servicio de reparación y mantenimiento';
    this.vehiculos = false;
    this.taller = true;
    this.eyelash1.nativeElement.classList.remove('btnSelected');
    this.eyelash2.nativeElement.classList.add('btnSelected');
  }
}
