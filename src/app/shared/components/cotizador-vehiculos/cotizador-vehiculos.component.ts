import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

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
    { id: '30-0-F', name: 'REFRIGERADO (30 F) (0 ˚C) O MÁS' },
    { id: '0-MENOS-0', name: 'CONGELADO MENOS 0 ˚C' },
    { id: 'no-refrigerado', name: 'NO REFRIGERADO' },
  ];

  formCotizado: boolean = true;
  detalleCotizado: boolean = false;

  temperaturaId: string = '';
  temperatura: string = '';
  rutaId: string = '';
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
    this.rutaId = this.forma.value.ruta;
    this.temperaturaId = this.forma.value.temperatura;

    Swal.fire({
      icon: 'success',
      title: 'Solicitud enviada',
      text:
        'En un momento un asesor se comunicara con ud para darle información sobre la ruta solicitada!',
    }).then((result) => {
      this.forma.reset({
        producto: '',
        ruta: '',
        origen: '',
        destino: '',
        temperatura: '',
        medidas: '',
        nombre: '',
        empresa: '',
        correo: '',
        telefono: '',
      });
    });

    this.noRuta = false;
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
    this.rutaId = this.forma.value.ruta;
    this.temperaturaId = this.forma.value.temperatura;

    if (this.rutaId === 'HI-SV' && this.temperaturaId === '30-0-F') {
      this.horasDeServicio = 72;
      this.priecio = 1300;
      this.ruta = 'Ciudad Hidalgo M.X - El Salvador';
      this.temperatura = 'REFRIGERADO (30 F) (0 ˚C) O MÁS';
    } else if (this.rutaId === 'HI-SV' && this.temperaturaId === '0-MENOS-0') {
      this.horasDeServicio = 72;
      this.priecio = 1600;
      this.ruta = 'Ciudad Hidalgo M.X - El Salvador';
      this.temperatura = 'CONGELADO MENOS 0 ˚C';
    } else if (this.rutaId === 'HI-HO' && this.temperaturaId === '30-0-F') {
      this.horasDeServicio = 96;
      this.priecio = 2100;
      this.ruta = 'Ciudad Hidalgo M.X - Tegucigalpa, Honduras';
      this.temperatura = 'REFRIGERADO (30 F) (0 ˚C) O MÁS';
    } else if (this.rutaId === 'HI-HO' && this.temperaturaId === '0-MENOS-0') {
      this.horasDeServicio = 96;
      this.priecio = 2400;
      this.ruta = 'Ciudad Hidalgo M.X - Tegucigalpa, Honduras';
      this.temperatura = 'CONGELADO MENOS 0 ˚C';
    } else if (this.rutaId === 'HI-NI' && this.temperaturaId === '30-0-F') {
      this.horasDeServicio = 120;
      this.priecio = 2750;
      this.ruta = 'Ciudad Hidalgo M.X - Nicaragua';
      this.temperatura = 'REFRIGERADO (30 F) (0 ˚C) O MÁS';
    } else if (this.rutaId === 'HI-NI' && this.temperaturaId === '0-MENOS-0') {
      this.horasDeServicio = 120;
      this.priecio = 2400;
      this.ruta = 'Ciudad Hidalgo M.X - Nicaragua';
      this.temperatura = 'CONGELADO MENOS 0 ˚C';
    } else if (this.rutaId === 'HI-CR' && this.temperaturaId === '30-0-F') {
      this.horasDeServicio = 144;
      this.priecio = 2850;
      this.ruta = 'Ciudad Hidalgo M.X - San José, Costa Rica';
      this.temperatura = 'REFRIGERADO (30 F) (0 ˚C) O MÁS';
    } else if (this.rutaId === 'HI-CR' && this.temperaturaId === '0-MENOS-0') {
      this.horasDeServicio = 144;
      this.priecio = 3350;
      this.ruta = 'Ciudad Hidalgo M.X - San José, Costa Rica';
      this.temperatura = 'CONGELADO MENOS 0 ˚C';
    } else if (this.rutaId === 'HI-PA' && this.temperaturaId === '30-0-F') {
      this.horasDeServicio = 168;
      this.priecio = 3800;
      this.ruta = 'Ciudad Hidalgo M.X - Panamá';
      this.temperatura = 'REFRIGERADO (30 F) (0 ˚C) O MÁS';
    } else if (this.rutaId === 'HI-PA' && this.temperaturaId === '0-MENOS-0') {
      this.horasDeServicio = 96;
      this.priecio = 4300;
      this.ruta = 'Ciudad Hidalgo M.X - Panamá';
      this.temperatura = 'CONGELADO MENOS 0 ˚C';
    } else if (this.rutaId === 'NI-HI' && this.temperaturaId === '30-0-F') {
      this.horasDeServicio = 96;
      this.priecio = 2300;
      this.ruta = 'Nicaragua - Ciudad Hidalgo M.X';
      this.temperatura = 'REFRIGERADO (30 F) (0 ˚C) O MÁS';
    } else if (this.rutaId === 'NI-HI' && this.temperaturaId === '0-MENOS-0') {
      this.horasDeServicio = 96;
      this.priecio = 2650;
      this.ruta = 'Nicaragua - Ciudad Hidalgo M.X';
      this.temperatura = 'CONGELADO MENOS 0 ˚C';
    } else if (
      this.rutaId === 'Guate-Teculutan' &&
      this.temperaturaId === '30-0-F'
    ) {
      this.horasDeServicio = 24;
      this.priecio = 500;
      this.ruta = 'Ciudad de Guatemala - Teculutan';
      this.temperatura = 'REFRIGERADO (30 F) (0 ˚C) O MÁS';
    } else if (
      this.rutaId === 'Guate-Teculutan' &&
      this.temperaturaId === '0-MENOS-0'
    ) {
      this.horasDeServicio = 24;
      this.priecio = 650;
      this.ruta = 'Ciudad de Guatemala - Teculutan';
      this.temperatura = 'CONGELADO MENOS 0 ˚C';
    } else if (this.rutaId === 'Guate-Xela' && this.temperaturaId === '30-0-F') {
      this.horasDeServicio = 24;
      this.priecio = 650;
      this.ruta = 'Ciudad de Guatemala - Quetzaltenango';
      this.temperatura = 'REFRIGERADO (30 F) (0 ˚C) O MÁS';
    } else if (
      this.rutaId === 'Guate-Xela' &&
      this.temperaturaId === '0-MENOS-0'
    ) {
      this.horasDeServicio = 24;
      this.priecio = 750;
      this.ruta = 'Ciudad de Guatemala - Quetzaltenango';
      this.temperatura = 'CONGELADO MENOS 0 ˚C';
    } else if (this.rutaId === 'GU-SV' && this.temperaturaId === '30-0-F') {
      this.horasDeServicio = 48;
      this.priecio = 1000;
      this.ruta = 'Ciudad de Guatemala - El Salvador';
      this.temperatura = 'REFRIGERADO (30 F) (0 ˚C) O MÁS';
    } else if (this.rutaId === 'GU-SV' && this.temperaturaId === '0-MENOS-0') {
      this.horasDeServicio = 48;
      this.priecio = 1300;
      this.ruta = 'Ciudad de Guatemala - El Salvador';
      this.temperatura = 'CONGELADO MENOS 0 ˚C';
    } else if (this.rutaId === 'GU-HO' && this.temperaturaId === '30-0-F') {
      this.horasDeServicio = 72;
      this.priecio = 1700;
      this.ruta = 'Ciudad de Guatemala - Honduras';
      this.temperatura = 'REFRIGERADO (30 F) (0 ˚C) O MÁS';
    } else if (this.rutaId === 'GU-HO' && this.temperaturaId === '0-MENOS-0') {
      this.horasDeServicio = 72;
      this.priecio = 2000;
      this.ruta = 'Ciudad de Guatemala - Honduras';
      this.temperatura = 'CONGELADO MENOS 0 ˚C';
    } else if (this.rutaId === 'GU-NI' && this.temperaturaId === '30-0-F') {
      this.horasDeServicio = 96;
      this.priecio = 2000;
      this.ruta = 'Ciudad de Guatemala - Nicaragua';
      this.temperatura = 'REFRIGERADO (30 F) (0 ˚C) O MÁS';
    } else if (this.rutaId === 'GU-NI' && this.temperaturaId === '0-MENOS-0') {
      this.horasDeServicio = 96;
      this.priecio = 2350;
      this.ruta = 'Ciudad de Guatemala - Nicaragua';
      this.temperatura = 'CONGELADO MENOS 0 ˚C';
    } else if (this.rutaId === 'GU-CR' && this.temperaturaId === '30-0-F') {
      this.horasDeServicio = 120;
      this.priecio = 2500;
      this.ruta = 'Ciudad de Guatemala - San José, Costa Rica';
      this.temperatura = 'REFRIGERADO (30 F) (0 ˚C) O MÁS';
    } else if (this.rutaId === 'GU-CR' && this.temperaturaId === '0-MENOS-0') {
      this.horasDeServicio = 120;
      this.priecio = 2900;
      this.ruta = 'Ciudad de Guatemala - San José, Costa Rica';
      this.temperatura = 'CONGELADO MENOS 0 ˚C';
    } else if (this.rutaId === 'GU-PA' && this.temperaturaId === '30-0-F') {
      this.horasDeServicio = 144;
      this.priecio = 3500;
      this.ruta = 'Ciudad de Guatemala - Panamá';
      this.temperatura = 'REFRIGERADO (30 F) (0 ˚C) O MÁS';
    } else if (this.rutaId === 'GU-PA' && this.temperaturaId === '0-MENOS-0') {
      this.horasDeServicio = 144;
      this.priecio = 4000;
      this.ruta = 'Ciudad de Guatemala - Panamá';
      this.temperatura = 'CONGELADO MENOS 0 ˚C';
    } else if (this.rutaId === 'CR-BE' && this.temperaturaId === '30-0-F') {
      this.horasDeServicio = 120;
      this.priecio = 3200;
      this.ruta = 'San José, Costa Rica - Belice';
      this.temperatura = 'REFRIGERADO (30 F) (0 ˚C) O MÁS';
    } else if (this.rutaId === 'CR-BE' && this.temperaturaId === '0-MENOS-0') {
      this.horasDeServicio = 120;
      this.priecio = 3800;
      this.ruta = 'San José, Costa Rica - Belice';
      this.temperatura = 'CONGELADO MENOS 0 ˚C';
    } else if (this.rutaId === 'CR-HI' && this.temperaturaId === '30-0-F') {
      this.horasDeServicio = 144;
      this.priecio = 3000;
      this.ruta = 'San José, Costa Rica - Ciudad Hidalgo M.X';
      this.temperatura = 'REFRIGERADO (30 F) (0 ˚C) O MÁS';
    } else if (this.rutaId === 'CR-HI' && this.temperaturaId === '0-MENOS-0') {
      this.horasDeServicio = 144;
      this.priecio = 3300;
      this.ruta = 'San José, Costa Rica - Ciudad Hidalgo M.X';
      this.temperatura = 'CONGELADO MENOS 0 ˚C';
    } else if (this.rutaId === 'CR-GU' && this.temperaturaId === '30-0-F') {
      this.horasDeServicio = 120;
      this.priecio = 2500;
      this.ruta = 'San José, Costa Rica - Ciudad de Guatemala';
      this.temperatura = 'REFRIGERADO (30 F) (0 ˚C) O MÁS';
    } else if (this.rutaId === 'CR-GU' && this.temperaturaId === '0-MENOS-0') {
      this.horasDeServicio = 120;
      this.priecio = 2800;
      this.ruta = 'San José, Costa Rica - Ciudad de Guatemala';
      this.temperatura = 'CONGELADO MENOS 0 ˚C';
    } else if (this.rutaId === 'CR-SV' && this.temperaturaId === '30-0-F') {
      this.horasDeServicio = 96;
      this.priecio = 2000;
      this.ruta = 'San José, Costa Rica - El Salvador';
      this.temperatura = 'REFRIGERADO (30 F) (0 ˚C) O MÁS';
    } else if (this.rutaId === 'CR-SV' && this.temperaturaId === '0-MENOS-0') {
      this.horasDeServicio = 96;
      this.priecio = 2200;
      this.ruta = 'San José, Costa Rica - El Salvador';
      this.temperatura = 'CONGELADO MENOS 0 ˚C';
    } else if (this.rutaId === 'CR-HO' && this.temperaturaId === '30-0-F') {
      this.horasDeServicio = 72;
      this.priecio = 1800;
      this.ruta = 'San José, Costa Rica - Tegucigalpa, Honduras';
      this.temperatura = 'REFRIGERADO (30 F) (0 ˚C) O MÁS';
    } else if (this.rutaId === 'CR-HO' && this.temperaturaId === '0-MENOS-0') {
      this.horasDeServicio = 72;
      this.priecio = 2200;
      this.ruta = 'San José, Costa Rica - Tegucigalpa, Honduras';
      this.temperatura = 'CONGELADO MENOS 0 ˚C';
    } else if (this.rutaId === 'CR-NI' && this.temperaturaId === '30-0-F') {
      this.horasDeServicio = 48;
      this.priecio = 1400;
      this.ruta = 'San José, Costa Rica - Nicaragua';
      this.temperatura = 'REFRIGERADO (30 F) (0 ˚C) O MÁS';
    } else if (this.rutaId === 'CR-NI' && this.temperaturaId === '0-MENOS-0') {
      this.horasDeServicio = 48;
      this.priecio = 1700;
      this.ruta = 'San José, Costa Rica - Nicaragua';
      this.temperatura = 'CONGELADO MENOS 0 ˚C';
    } else if (this.temperaturaId === 'no-refrigerado') {
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
