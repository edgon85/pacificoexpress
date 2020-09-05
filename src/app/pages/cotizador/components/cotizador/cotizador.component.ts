import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.scss'],
})
export class CotizadorComponent implements OnInit {
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
  ];

  masas = [
    { id: 'libra', name: 'Libra' },
    { id: 'onza', name: 'Onza' },
    { id: 'manojo', name: 'Manojo' },
    { id: 'unidad', name: 'Unidad' },
    { id: 'caja', name: 'Caja' },
    { id: 'docena', name: 'Docena' },
    { id: 'pack', name: 'Pack' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
