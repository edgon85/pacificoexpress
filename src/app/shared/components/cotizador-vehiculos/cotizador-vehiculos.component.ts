import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cotizador-vehiculos',
  templateUrl: './cotizador-vehiculos.component.html',
  styleUrls: ['./cotizador-vehiculos.component.scss'],
})
export class CotizadorVehiculosComponent implements OnInit {
  rutas = [
    { id: 'HI-SV', name: 'Ciudad Hidalgo M.X - El Salvador' },
    { id: 'HI-HO', name: 'Ciudad Hidalgo M.X - Tegucigalpa, Honduras' },
    { id: 'HI-NI', name: 'Ciudad Hidalgo M.X - Nicaragua' },
    { id: 'HI-CR', name: 'Ciudad Hidalgo M.X - San José, Costa Rica' },
    { id: 'HI-PA', name: 'Ciudad Hidalgo M.X - Panamá' },
    { id: 'NI-HI', name: 'Nicaragua - Ciudad Hidalgo M.X' },
    { id: 'Guate-Teculutan', name: 'Ciudad de Guatemala - Teculutan' },
    { id: 'Guate-Xela', name: 'Ciudad de Guatemala - Quetzaltenango' },
    { id: 'GU-SV', name: 'Ciudad de Guatemala - El Salvador' },
    { id: 'GU-HO', name: 'Ciudad de Guatemala - Honduras' },
    { id: 'GU-NI', name: 'Ciudad de Guatemala - Nicaragua' },
    { id: 'GU-CR', name: 'Ciudad de Guatemala - San José, Costa Rica' },
    { id: 'GU-PA', name: 'Ciudad de Guatemala - Panamá' },
    { id: 'CR-BE', name: 'San José, Costa Rica - Belice' },
    { id: 'CR-HI', name: 'San José, Costa Rica - Ciudad Hidalgo M.X' },
    { id: 'CR-GU', name: 'San José, Costa Rica - Ciudad de Guatemala' },
    { id: 'CR-SV', name: 'San José, Costa Rica - El Salvador' },
    { id: 'CR-HO', name: 'San José, Costa Rica - Tegucigalpa, Honduras' },
    { id: 'CR-NI', name: 'San José, Costa Rica - Nicaragua' },
    { id: 'OTRO', name: 'Otro' },
  ];

  temperaturas = [
    { id: '30-0-F', name: 'REFRIGERADO (30 F) (0 C) O MÁS' },
    { id: '0-MENOS-0', name: 'CONGELADO MENOS 0 C' },
    { id: 'no-refrigerado', name: 'NO REFRIGERADO' },
  ];

  formCotizado: boolean = true;
  detalleCotizado: boolean = false;

  temperatura: string = '';
  ruta: string = '';
  horasDeServicio: number = 0;
  priecio: number = 0;

  // formulario
  forma: FormGroup;
  emailValidator = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$';
  phoneValidator: string = `^((\\+91-?)|0)?[0-9]{8}$`;

  /* <=================================> */
  noRuta: boolean = false;

  constructor(private bf: FormBuilder) {
    this.formularioCotizador();
  }

  ngOnInit(): void {}

  // Formulario cotiazdor
  formularioCotizador() {
    this.forma = this.bf.group({
      // producto: ['', Validators.required],
      ruta: ['', Validators.required],
      origen: [''],
      destino: [''],
      temperatura: ['', Validators.required],
      medidasFurgon: ['', Validators.required],
      nombre: ['', Validators.required],
      empresa: ['', Validators.required],
      correo: [
        '',
        [Validators.required, Validators.pattern(this.emailValidator)],
      ],
      telefono: [
        '',
        [
          Validators.required,
          Validators.pattern(new RegExp('^[0-9]*$')),
          Validators.minLength(8),
          Validators.maxLength(8),
        ],
      ],
    });
  }

  validarCampo(nombre: string) {
    return this.forma.get(nombre).invalid && this.forma.get(nombre).touched;
  }

  /* <======================> */
  /* Obtener el balor de ruta */
  /* <======================> */
  changeValueRuta(value: any) {
    console.log(value);
    if (value === 'OTRO') {
      this.noRuta = true;
    } else {
      this.noRuta = false;
    }
  }
  /* <======================> */

  /* <=========================> */
  /* boton de cotizar sin datos  */
  /* <=========================> */
  btnCotizar2() {
    // si la forma de checkout es valida
    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(
            (resp) => resp.markAsTouched(),
            console.log('Llene campos obligatorios')
            // Swal.fire('Llene campos obligatorios')
          );
        } else {
          control.markAsTouched();

          console.log('llenar campor obligatorios');
          // Swal.fire('Llene campos obligatorios');
        }
      });
    }

    console.log(this.forma.value);
    this.ruta = this.forma.value.ruta;
    this.temperatura = this.forma.value.temperatura;
  }

  /* <=========================> */
  /* boton de cotizar con datos  */
  /* <=========================> */
  public btnCotizar() {
    // si la forma de checkout es valida
    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(
            (resp) => resp.markAsTouched(),
            console.log('Llene campos obligatorios')
            // Swal.fire('Llene campos obligatorios')
          );
        } else {
          control.markAsTouched();

          console.log('llenar campor obligatorios');
          // Swal.fire('Llene campos obligatorios');
        }
      });
    }

    console.log(this.forma.value);
    this.ruta = this.forma.value.ruta;
    this.temperatura = this.forma.value.temperatura;

    if (this.ruta === 'HI-SV' && this.temperatura === '30-0-F') {
      this.horasDeServicio = 72;
      this.priecio = 1300;
    } else if (this.ruta === 'HI-SV' && this.temperatura === '0-MENOS-0') {
      this.horasDeServicio = 72;
      this.priecio = 1600;
    } else if (this.ruta === 'HI-HO' && this.temperatura === '30-0-F') {
      this.horasDeServicio = 96;
      this.priecio = 2100;
    } else if (this.ruta === 'HI-HO' && this.temperatura === '0-MENOS-0') {
      this.horasDeServicio = 96;
      this.priecio = 2400;
    } else if (this.ruta === 'HI-NI' && this.temperatura === '30-0-F') {
      this.horasDeServicio = 120;
      this.priecio = 2750;
    } else if (this.ruta === 'HI-NI' && this.temperatura === '0-MENOS-0') {
      this.horasDeServicio = 120;
      this.priecio = 2400;
    } else if (this.ruta === 'HI-CR' && this.temperatura === '30-0-F') {
      this.horasDeServicio = 144;
      this.priecio = 2850;
    } else if (this.ruta === 'HI-CR' && this.temperatura === '0-MENOS-0') {
      this.horasDeServicio = 144;
      this.priecio = 3350;
    } else if (this.ruta === 'HI-PA' && this.temperatura === '30-0-F') {
      this.horasDeServicio = 168;
      this.priecio = 3800;
    } else if (this.ruta === 'HI-PA' && this.temperatura === '0-MENOS-0') {
      this.horasDeServicio = 96;
      this.priecio = 4300;
    } else if (this.ruta === 'NI-HI' && this.temperatura === '30-0-F') {
      this.horasDeServicio = 96;
      this.priecio = 2300;
    } else if (this.ruta === 'NI-HI' && this.temperatura === '0-MENOS-0') {
      this.horasDeServicio = 96;
      this.priecio = 2650;
    } else if (
      this.ruta === 'Guate-Teculutan' &&
      this.temperatura === '30-0-F'
    ) {
      this.horasDeServicio = 24;
      this.priecio = 500;
    } else if (
      this.ruta === 'Guate-Teculutan' &&
      this.temperatura === '0-MENOS-0'
    ) {
      this.horasDeServicio = 24;
      this.priecio = 650;
    } else if (this.ruta === 'Guate-Xela' && this.temperatura === '30-0-F') {
      this.horasDeServicio = 24;
      this.priecio = 650;
    } else if (this.ruta === 'Guate-Xela' && this.temperatura === '0-MENOS-0') {
      this.horasDeServicio = 24;
      this.priecio = 750;
    } else if (this.ruta === 'GU-SV' && this.temperatura === '30-0-F') {
      this.horasDeServicio = 48;
      this.priecio = 1000;
    } else if (this.ruta === 'GU-SV' && this.temperatura === '0-MENOS-0') {
      this.horasDeServicio = 48;
      this.priecio = 1300;
    } else if (this.ruta === 'GU-HO' && this.temperatura === '30-0-F') {
      this.horasDeServicio = 72;
      this.priecio = 1700;
    } else if (this.ruta === 'GU-HO' && this.temperatura === '0-MENOS-0') {
      this.horasDeServicio = 72;
      this.priecio = 2000;
    } else if (this.ruta === 'GU-NI' && this.temperatura === '30-0-F') {
      this.horasDeServicio = 96;
      this.priecio = 2000;
    } else if (this.ruta === 'GU-NI' && this.temperatura === '0-MENOS-0') {
      this.horasDeServicio = 96;
      this.priecio = 2350;
    } else if (this.ruta === 'GU-CR' && this.temperatura === '30-0-F') {
      this.horasDeServicio = 120;
      this.priecio = 2500;
    } else if (this.ruta === 'GU-CR' && this.temperatura === '0-MENOS-0') {
      this.horasDeServicio = 120;
      this.priecio = 2900;
    } else if (this.ruta === 'GU-PA' && this.temperatura === '30-0-F') {
      this.horasDeServicio = 144;
      this.priecio = 3500;
    } else if (this.ruta === 'GU-PA' && this.temperatura === '0-MENOS-0') {
      this.horasDeServicio = 144;
      this.priecio = 4000;
    } else if (this.ruta === 'CR-BE' && this.temperatura === '30-0-F') {
      this.horasDeServicio = 120;
      this.priecio = 3200;
    } else if (this.ruta === 'CR-BE' && this.temperatura === '0-MENOS-0') {
      this.horasDeServicio = 120;
      this.priecio = 3800;
    } else if (this.ruta === 'CR-HI' && this.temperatura === '30-0-F') {
      this.horasDeServicio = 144;
      this.priecio = 3000;
    } else if (this.ruta === 'CR-HI' && this.temperatura === '0-MENOS-0') {
      this.horasDeServicio = 144;
      this.priecio = 3300;
    } else if (this.ruta === 'CR-GU' && this.temperatura === '30-0-F') {
      this.horasDeServicio = 120;
      this.priecio = 2500;
    } else if (this.ruta === 'CR-GU' && this.temperatura === '0-MENOS-0') {
      this.horasDeServicio = 120;
      this.priecio = 2800;
    } else if (this.ruta === 'CR-SV' && this.temperatura === '30-0-F') {
      this.horasDeServicio = 96;
      this.priecio = 2000;
    } else if (this.ruta === 'CR-SV' && this.temperatura === '0-MENOS-0') {
      this.horasDeServicio = 96;
      this.priecio = 2200;
    } else if (this.ruta === 'CR-HO' && this.temperatura === '30-0-F') {
      this.horasDeServicio = 72;
      this.priecio = 1800;
    } else if (this.ruta === 'CR-HO' && this.temperatura === '0-MENOS-0') {
      this.horasDeServicio = 72;
      this.priecio = 2200;
    } else if (this.ruta === 'CR-NI' && this.temperatura === '30-0-F') {
      this.horasDeServicio = 48;
      this.priecio = 1400;
    } else if (this.ruta === 'CR-NI' && this.temperatura === '0-MENOS-0') {
      this.horasDeServicio = 48;
      this.priecio = 1700;
    } else if (this.temperatura === 'no-refrigerado') {
      this.horasDeServicio = 0;
      this.priecio = 0;
    }

    this.detalleCotizado = true;

    this.formCotizado = false;
  }

  nuevaCotizacion() {
    this.formCotizado = true;
    this.detalleCotizado = false;

    this.forma.reset({
      producto: '',
      ruta: '',
      temperatura: '',
      medidas: '',
      nombre: '',
      empresa: '',
      correo: '',
      telefono: '',
    });
  }
}
