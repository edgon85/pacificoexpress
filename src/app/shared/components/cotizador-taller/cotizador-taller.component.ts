import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TallerService } from '../../../services/taller.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cotizador-taller',
  templateUrl: './cotizador-taller.component.html',
  styleUrls: ['./cotizador-taller.component.scss'],
})
export class CotizadorTallerComponent implements OnInit {
  // formulario
  forma: FormGroup;

  servicios$: Observable<any[]>;
  dataServic: any = {};

  tableValue: boolean = false;

  constructor(private bf: FormBuilder, private tallerService: TallerService) {
    this.formularioCotizador();
  }

  ngOnInit(): void {
    this.obtenerServiciosDeTaller();
  }

  // Formulario cotiazdor
  formularioCotizador() {
    this.forma = this.bf.group({
      servicio: ['', Validators.required],
    });
  }

  obtenerServiciosDeTaller() {
    this.servicios$ = this.tallerService.getAllRepuestos();
  }

  changeValue(value: any) {
    this.tallerService
      .getOneService(value)
      .pipe(
        map((resp) => {
          this.tableValue = true;
          this.dataServic = resp;
        })
      )
      .subscribe();
  }
}
