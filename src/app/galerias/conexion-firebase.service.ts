import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { faSnapchat } from '@fortawesome/free-brands-svg-icons';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ConexionFirebaseService {

  private coleccion = 'gals';
  private userId;
  private galerias$: Observable<any>;
  constructor(public db: AngularFirestore, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {

      if (user) {
         this.userId = user.uid;
         this.crearObservable();
      }
    });
  }


  // getGalerias() {
  //   // if (!this.userId) { return; }
  //   return new Promise<any>((resolve, reject) => {
  //     this.db.collection(`${this.coleccion}/${this.userId}`).snapshotChanges()
  //     .subscribe(snapshots => {

  //       resolve(snapshots);
  //     });
  //   });
  // }


  crearGaleria(titulo: string, descripcion: string) {
    return this.db.collection(`${this.coleccion}`).doc(`${this.userId}`).collection(`${this.coleccion}`).add({
      Titulo: titulo,
      Descripcion: descripcion
    });
  }

  crearObservable() {
    if (!this.galerias$) {
      this.galerias$ = new Observable<any>(subscribe => {
        this.db.collection(`${this.coleccion}`).doc(`${this.userId}`).collection(`${this.coleccion}`).snapshotChanges()
          .subscribe(snapshots => {
            subscribe.next(snapshots);
          });
      });
    }
  }

  getGaleriasAutomaticPull() {
    this.crearObservable();
    return this.galerias$;
  }


}
