import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { ProductService } from 'src/app/services/product.service';

declare var $: any;

@Component({
  selector: 'app-repuestos-detail',
  templateUrl: './repuestos-detail.component.html',
  styleUrls: ['./repuestos-detail.component.scss'],
})
export class RepuestosDetailComponent implements OnInit {
  repuesto$: Observable<any[]>;
  param: string;
  headerTitle: string = '';

  // ======= modal ========= \\
  prodSelect: any;
  public ocultarModal: boolean = true;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((param) => {
      this.param = param['id'];
      this.headerTitle = this.param.split('-').join(' ');
    });
  }

  ngOnInit(): void {
    this.getOneRepuesto();
  }

  getOneRepuesto() {
    // this.products$ = _cartService.cart$;
    this.repuesto$ = this.productService.getRepuesto(this.param);
    // console.log(this.repuesto$);
  }

  dataRepuesto(repuesto: any) {
    this.prodSelect = repuesto;
    this.ocultarModal = false;
  }

  rerrarModal() {
    this.ocultarModal = true;
  }
}
