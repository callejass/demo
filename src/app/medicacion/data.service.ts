import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscriber } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { switchMap, subscribeOn, mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private colecciontomas = 'tomas';
  private coleccionmedicinas = 'medicinas';
  private coleccionusuarios = 'usuarios';

  private usuario: any;

  private medicinas$: Observable<any>;
  private tomas$: Observable<any>;


  constructor(public db: AngularFirestore, private autenticacion: AuthService, private spinner: NgxSpinnerService) {
    this.crearObservableMedicinas2();
    this.crearObservableTomas2();
    autenticacion.user.subscribe(usuario => {
      this.usuario = usuario;
    });
  }



  GetMedicinas() {

    return this.medicinas$;
    //this.crearObservableMedicinas();
    //return this.medicinas$;
  }

  GetTomas() {
    return this.tomas$;
  }


  private crearObservableMedicinas2() {
    this.medicinas$ = this.autenticacion.user.pipe(
      switchMap((usuario: any) => {

        const userid = usuario.id;
        return new Observable<any>(subscribe => {
          this.db.collection(`${this.coleccionusuarios}`)
          .doc(`${userid}`)
          .collection(`${this.coleccionmedicinas}`)
          .snapshotChanges().subscribe(snapshots => {
            const data = snapshots.map(item => {
              return {
                id: item.payload.doc.id,
                titulo: item.payload.doc.data().Titulo,
                descripcion: item.payload.doc.data().Descripcion,
                tomada: item.payload.doc.data().Tomada === null ? false : item.payload.doc.data().Tomada
              };
            });
            subscribe.next(data);
          });
        });
    }));
  }
  private crearObservableTomas2() {
    this.tomas$ = this.autenticacion.user.pipe(
      switchMap((usuario: any) => {

        const userid = usuario.id;
        return new Observable<any>(subscribe => {
          this.db.collection(`${this.coleccionusuarios}`)
          .doc(`${userid}`)
          .collection(`${this.colecciontomas}`)
          .snapshotChanges().subscribe(snapshots => {
            const data = snapshots.map(item => {
              const fecha: Date = new Date(item.payload.doc.data().Fecha.seconds * 1000);
              return {
                id: item.payload.doc.id,
                fecha: fecha,
                tomada: item.payload.doc.data().Tomada,
                // tslint:disable-next-line:max-line-length
                descripcion: item.payload.doc.data().Descripcion ? item.payload.doc.data().Descripcion : item.payload.doc.data().IdMedicina
              };
            });
            subscribe.next(data);
          });
        });
    }));

  }

  CrearMedicina(titulo: string, descripcion: string, imagen: string) {

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


  CrearToma(idMedicina: string, fecha: Date, descripcion: string) {
    return this.db.collection(`${this.coleccionusuarios}`).doc(`${this.usuario.id}`).collection(`${this.colecciontomas}`).add({
      Descripcion: descripcion,
      Fecha: fecha,
      Tomada: false
    });
  }

  BorrarToma(id: string) {
    return  this.db.collection(`${this.coleccionusuarios}`).doc(`${this.usuario.id}`).collection(`${this.colecciontomas}`).doc(id).delete();
  }

  CambiarEstadoToma(id: string, estado: boolean) {
    this.spinner.show();
    const ref = this.db.collection(`${this.coleccionusuarios}`).doc(`${this.usuario.id}`).collection(`${this.colecciontomas}`).doc(id);
   ref.update({
      Tomada: estado
    }).then(value => {
      this.spinner.hide();
    }, reason => {
      this.spinner.hide();
    });
  }


  // private crearObservableMedicinas() {
  //   if (!this.medicinas$) {
  //     this.medicinas$ = new Observable<any>(subscribe => {
  //       this.db.collection(`${this.coleccionusuarios}`).doc(`${this.usuario.id}`).collection(`${this.coleccionmedicinas}`).snapshotChanges()
  //         .subscribe(snapshots => {
  //           const data = snapshots.map(item => {
  //             return {
  //               id: item.payload.doc.id,
  //               titulo: item.payload.doc.data().Titulo,
  //               descripcion: item.payload.doc.data().Descripcion,
  //               tomada: item.payload.doc.data().Tomada === null ? false : item.payload.doc.data().Tomada
  //             };
  //           });
  //           subscribe.next(data);
  //         });
  //     });
  //   }
  // }

  private crearObservableTomas() {
    if (!this.tomas$) {
      this.tomas$ = new Observable<any>(subscribe => {
        this.db.collection(`${this.coleccionusuarios}`).doc(`${this.usuario.id}`).collection(`${this.colecciontomas}`).snapshotChanges()
          .subscribe(snapshots => {
            const data = snapshots.map(item => {
              const fecha: Date = new Date(item.payload.doc.data().Fecha.seconds * 1000);
              return {
                id: item.payload.doc.id,
                fecha: fecha,
                tomada: item.payload.doc.data().Tomada,
                // tslint:disable-next-line:max-line-length
                descripcion: item.payload.doc.data().Descripcion ? item.payload.doc.data().Descripcion : item.payload.doc.data().IdMedicina
              };
            });
            subscribe.next(data);
          });
      });
    }
  }



}
