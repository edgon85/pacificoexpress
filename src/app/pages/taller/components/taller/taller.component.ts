import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TallerService } from '../../../../services/taller.service';

@Component({
  selector: 'app-taller',
  templateUrl: './taller.component.html',
  styleUrls: ['./taller.component.scss'],
})
export class TallerComponent implements OnInit {
  servicios$: Observable<any[]>;

  constructor(private tallerService: TallerService) {}

  ngOnInit(): void {
    this.obtenerServiciosDeTaller();
  }

  obtenerServiciosDeTaller() {
    this.servicios$ = this.tallerService.getAllRepuestos();
  }
}
