import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mapTo, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Cacheable } from 'ngx-cacheable';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  GetDatosPrueba(zoom: number): Observable<any> {

    const fichero: string = this.GetNivel(zoom);

    return this.http.get(`/assets/aemet/web_fuente_datos${fichero}.json`);
  }
  @Cacheable()
  GetDatos(zoom: number, fenomeno: string) {
    const nivel: string = this.GetNivel(zoom);
    const prefijo: string = this.GetPrefijoFenomeno(fenomeno);
    const url = `/assets/aemet/web_fuente_datos/web_mpl/mpl_${nivel}_3dias_${prefijo}_D+0_18h.json`;
    return this.http.get(url);
  }

   GetPrefijoFenomeno = function(fenomeno: string) {
    return 'c_precipi';
   };

    // let prefijo: string;
    // switch (fenomeno) {
    //   case 'lluvia':


    // }

   GetNivel = function(zoom: number) {
    let fichero: string;
    if (zoom > 9) {
      fichero = 'Localidad';
    } else  if (zoom >= 7) {
      fichero = 'Provincia';
    } else {
      fichero = 'CCAA';
    }
    return fichero;
  };

}
