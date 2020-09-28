import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-vehiculos-layout',
  templateUrl: './vehiculos-layout.component.html',
  styleUrls: ['./vehiculos-layout.component.scss']
})
export class VehiculosLayoutComponent implements OnInit {

  categoria: string = '';

  vehiculos$: Observable<any[]>;

  constructor(private router: ActivatedRoute, private productService: ProductService) {
    this.categoria = this.router.parent.snapshot.firstChild.routeConfig.path;
    
  }

  ngOnInit(): void {
    this.getVehiculo(this.categoria);
  }

  getVehiculo(category: string){
    this.vehiculos$ = this.productService.getVehiculos(category);
  }

}
