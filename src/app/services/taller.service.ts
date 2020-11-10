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
      map((data) => Object.keys(data).map((k) => data[k])) // ordenar alfabeticamente
    );

    return data;
  }
}
