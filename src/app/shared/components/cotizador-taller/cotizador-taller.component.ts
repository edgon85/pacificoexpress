import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cotizador-taller',
  templateUrl: './cotizador-taller.component.html',
  styleUrls: ['./cotizador-taller.component.scss'],
})
export class CotizadorTallerComponent implements OnInit {
  // formulario
  forma: FormGroup;
  emailValidator = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$';
  phoneValidator: string = `^((\\+91-?)|0)?[0-9]{8}$`;

  constructor(private bf: FormBuilder) {}

  ngOnInit(): void {}
}
