import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TallerService {
  private urlProduct = 'https://beastmain-df1c1.firebaseio.com';

  constructor(private http: HttpClient) {}

  public getAllRepuestos() {
    const url = this.urlProduct + `/servicios-mecanicos.json`;

    const data = this.http.get(url).pipe(
      map((resp) => Object.keys(resp).map((k) => resp[k])) // ordenar alfabeticamente
    );

    return data;
  }

  public getOneService(serviceId: string) {
    const url = this.urlProduct + `/servicios-mecanicos/${serviceId}.json`;

    return this.http.get(url);
  }
}
