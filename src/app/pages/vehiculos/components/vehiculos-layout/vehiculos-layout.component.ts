import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-vehiculos-layout',
  templateUrl: './vehiculos-layout.component.html',
  styleUrls: ['./vehiculos-layout.component.scss'],
})
export class VehiculosLayoutComponent implements OnInit {
  cargando: boolean = false;

  categoria: string = '';

  vehiculos$: Observable<any[]>;

  // ======= modal ========= \\
  prodSelect: any;
  public ocultarModal: boolean = true;

  constructor(
    private router: ActivatedRoute,
    private productService: ProductService
  ) {
    this.categoria = this.router.parent.snapshot.firstChild.routeConfig.path;
  }

  ngOnInit(): void {
    this.cargando = true;
    this.getVehiculo(this.categoria);
  }

  getVehiculo(category: string) {
    this.vehiculos$ = this.productService.getVehiculos(category).pipe(
      map((resp) => {
        this.cargando = false;
        resp.sort((a, b) => a.name.localeCompare(b.name)); // ordenar alfabeticamente
        return resp;
      })
    );
  }

  vehiculoDetail(servicio: any) {
    this.prodSelect = servicio;
    this.ocultarModal = false;
    console.log(servicio);
  }

  cerrarModal() {
    this.ocultarModal = true;
  }
}
