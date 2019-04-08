import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mapTo, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Cacheable } from 'ngx-cacheable';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private fenomenos: any = {
    lluvia: 'c_precipi',
    nieve: 'cNieve'
  };

  
  constructor(private http: HttpClient) { }


  GetDatosPrueba(zoom: number): Observable<any> {

    const fichero: string = this.GetNivel(zoom);

    return this.http.get(`/assets/aemet/web_fuente_datos${fichero}.json`);
  }
  @Cacheable()
  GetDatos(zoom: number, fenomeno: string, hora: number): Observable<any> {
    const nivel: string = this.GetNivel(zoom);
    const sufijofenomeno: string = this.GetSufijoFenomeno(fenomeno);

    const sufijohora: string = this.GetSufijoHora(hora);
    const url = `/assets/aemet/web_fuente_datos/web_mpl/mpl_${nivel}_3dias_${sufijofenomeno}_${sufijohora}.json`;
    return this.http.get(url);
  }

   GetSufijoFenomeno = function(fenomeno: string) {

    return this.fenomenos[fenomeno];
    // return 'c_precipi';
   };

   GetSufijoHora = function (hora: number) {
      const c = Math.trunc(hora / 24);
      const r = hora % 24;
      return `D+${c}_${r}h`;
   };

    // let prefijo: string;
    // switch (fenomeno) {
    //   case 'lluvia':


    // }

   GetNivel = function(zoom: number) {
    let fichero: string;
    if (zoom > 10) {
      fichero = 'Localidad';
    } else  if (zoom > 8) {
      fichero = 'Provincia';
    } else if (zoom > 6) {
      fichero = 'CCAA';
    } else {
      fichero = 'Nacional';
    }
    return fichero;
  };

}
