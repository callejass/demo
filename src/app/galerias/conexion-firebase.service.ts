import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { faSnapchat } from '@fortawesome/free-brands-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class ConexionFirebaseService {

  private coleccion = '/galerias';
  constructor(public db: AngularFirestore) { }


  getGalerias() {
    return new Promise<any>((resolve, reject) => {
      this.db.collection('/galerias').snapshotChanges()
      .subscribe(snapshots => {

        resolve(snapshots);
      });
    });
  }


  crearGaleria(titulo: string, descripcion: string) {
    return this.db.collection(this.coleccion).add({
      Titulo: titulo,
      Descripcion: descripcion
    });
  }

  getGaleriasAutomaticPull() {
    return new Observable<any>(subscribe => {
      this.db.collection('/galerias').snapshotChanges()
      .subscribe(snapshots => {
        subscribe.next(snapshots);
      });
    });
  }


}
