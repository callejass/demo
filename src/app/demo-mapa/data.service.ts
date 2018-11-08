import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient
  ) {}


  loadLayerData(fichero: string): Observable<any> {
    const url: string = '/assets/mapas/data/' + fichero;
    return this.httpClient.get(url);
  }

}
