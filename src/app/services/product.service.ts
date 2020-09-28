import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeAll, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlProduct = 'https://beastmain-df1c1.firebaseio.com';

  constructor(private http: HttpClient) { }


  public getAllRepuestos() {
    const url = this.urlProduct + `/repuestos.json`;

    const data = this.http.get(url)
    .pipe(
     map(data => Object.keys(data).map(k => data[k])),
    );

    return data;
  }

  public getRepuesto( repuestoId: string ){
    const url = this.urlProduct + `/repuestos/${repuestoId}.json`;

    const data = this.http.get(url)
    .pipe(
     pluck('productos'),
     map(data => Object.keys(data).map(k => data[k])),
    );

    return data;
  }


  public getVehiculos(category: string) {
    const url = this.urlProduct + `/vehiculos.json?orderBy="category"&equalTo="${category}"`;

    const data = this.http.get(url)
    .pipe(
     map(data => Object.keys(data).map(k => data[k])),
    );

    return data;
  }

}
