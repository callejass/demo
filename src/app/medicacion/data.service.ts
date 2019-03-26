import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private coleccionmedicinas = 'medicinas';
  private coleccionusuarios = 'usuarios';

  private usuario: any;

  private medicinas$: Observable<any>;



  constructor(public db: AngularFirestore, private autenticacion: AuthService) {
    autenticacion.user.subscribe(usuario => {
      this.usuario = usuario;
      this.crearObservableMedicinas();
    });
  }



  GetMedicinas() {
    debugger;
    this.crearObservableMedicinas();
    return this.medicinas$;
  }
  CrearMedicina(titulo: string, descripcion: string, imagen: string) {
    debugger;
    return this.db.collection(`${this.coleccionusuarios}`).doc(`${this.usuario.id}`).collection(`${this.coleccionmedicinas}`).add({
      Titulo: titulo,
      Descripcion: descripcion,
      Imagen: imagen
    });
  }
  BorrarMedicina(id: string) {
    // tslint:disable-next-line:max-line-length
    return this.db.collection(`${this.coleccionusuarios}`).doc(`${this.usuario.id}`).collection(`${this.coleccionmedicinas}`).doc(id).delete();
  }

  private crearObservableMedicinas() {
    if (!this.medicinas$) {
      this.medicinas$ = new Observable<any>(subscribe => {
        this.db.collection(`${this.coleccionusuarios}`).doc(`${this.usuario.id}`).collection(`${this.coleccionmedicinas}`).snapshotChanges()
          .subscribe(snapshots => {
            debugger;
            subscribe.next(snapshots);
          });
      });
    }
  }


}
