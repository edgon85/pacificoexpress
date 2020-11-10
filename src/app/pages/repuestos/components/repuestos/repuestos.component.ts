import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
  styleUrls: ['./repuestos.component.scss']
})
export class RepuestosComponent implements OnInit {

  repuestos$: Observable<any[]>;

  constructor(private productoService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getAllRepuestos();
  }


  getAllRepuestos(){
    // this.products$ = _cartService.cart$;
    this.repuestos$ = this.productoService.getAllRepuestos();
    // console.log(this.repuestos$)
  }


  repuestoSubcategoria(repuestoId: string){
    this.router.navigateByUrl(`repuestos/${repuestoId}`);
    // console.log(repuestoId);
  }

}
