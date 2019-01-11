import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PocService {

  constructor(private httpClient: HttpClient) { }


  getFaces(imageDataUrl): Observable<any> {
    const apikey = 'bdb1e60308f245abbcaa80617360cc91';
    // tslint:disable-next-line:max-line-length
    const url = '/assets/pruebas/data/facepoc.json';

    return this.httpClient.get<any>(url)
    .pipe(
      map(response => {
        return response;
      })
    );
  }
}
