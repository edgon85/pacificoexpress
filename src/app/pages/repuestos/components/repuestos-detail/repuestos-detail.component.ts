import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-repuestos-detail',
  templateUrl: './repuestos-detail.component.html',
  styleUrls: ['./repuestos-detail.component.scss']
})
export class RepuestosDetailComponent implements OnInit {

  param1: string;
  constructor(private productService: ProductService, private route: ActivatedRoute) {


    this.route.params.subscribe(param => {
      console.log(param['id'])

      this.param1 = param['id'];
    })

  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(console.log)
  }

}
