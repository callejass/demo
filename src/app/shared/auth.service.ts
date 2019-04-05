import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { map, mapTo, switchMapTo } from 'rxjs/operators';
import { FirebaseApp } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  userObj: any;
  // user: Observable<firebase.User>;
  user: Observable<any>;
  authToken: any;

  constructor(public fireAuth: AngularFireAuth) {
    // this.user = fireAuth.authState;

    // this.user = new Observable<any>(subscribe => {
    //   fireAuth.authState.subscribe(usuario => {
    //     if (usuario) {
    //       subscribe.next({
    //           id: usuario.uid,
    //           nombre: usuario.displayName,
    //           foto: usuario.photoURL
    //       });
    //     } else {
    //       subscribe.next(null);
    //     }
    //   });
    // });

    this.user = fireAuth.authState.pipe(
      map(usuario => {
        if (usuario) {
          return {
            id: usuario.uid,
            nombre: usuario.displayName,
            foto: usuario.photoURL
          };
        } else {
          return null;
        }
      })
    );





    // fireAuth.authState.subscribe(usuario => {
    //   debugger;
    //   if (usuario) {

    //   } else {

    //   }
    // });



  }

  canActivate(): Observable<boolean> {
    return this.fireAuth.authState.pipe(map(user => user !== null));
  }

  // storeUserData(token, user) {
  //   localStorage.setItem('id_token', token);
  //   localStorage.setItem('user', JSON.stringify(user));
  //   this.authToken = token;
  //   this.user = user;
  // }


  loginWithMailPassword(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  loginWithGoogle() {


    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(function() {
      const provider = new firebase.auth.GoogleAuthProvider();
      // In memory persistence will be applied to the signed in Google user
      // even though the persistence was set to 'none' and a page redirect
      // occurred.
      return firebase.auth().signInWithPopup(provider);
    })
    .catch(function(error) {
      // Handle Errors here.
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  }
  onAuthChanged() {
    debugger;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        const userObj = {
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
          uid: user.uid,
          providerData: user.providerData
        };
       return(userObj);
        // ...
      } else {
        // User is signed out.
        //
        console.log('You are signed out!');
      }
    });
  }

  // signUp(email, password) {
  //   firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ...
  //   });
  // }



  logout() {
    this.fireAuth.auth.signOut();
  }
}
