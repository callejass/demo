import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';
// import * as firebase from 'firebase/app';
import * as $ from 'jquery';
// import { NotificationServicesService } from '../notification-services.service';
import { CustomModalService } from '../custom-modal/custom-modal.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: string;
  loggedIn = false;
  userObj: any;

  useremail: string;
  password: string;

  constructor(public authServ: AuthService, private noteSvc: CustomModalService) {

  }

  ngOnInit() {

    this.authServ.user.subscribe( usuario => {
      this.userObj = usuario;
    });
     // this.authChanged();
  }

  onGLogin() {

    this.authServ.loginWithGoogle();

  }



  // onSignUp() {

  //   if (this.useremail === undefined || this.password === undefined) {
  //       this.noteSvc.showError(
  //         'Missing Information',
  //         'User name and password are mandatory!'
  //       );
  //       $('.notification-btn').click();
  //   } else if (this.useremail.length < 4) {
  //       this.noteSvc.showError(
  //         'Missing Information',
  //         'Invalid Email address entered!'
  //       );
  //     return;
  //   } else if (this.password.length < 4) {
  //     this.noteSvc.showError(
  //       'Missing Information',
  //       'Invalid password entered!'
  //       );
  //     return;
  //   } else {
  //     // Sign in with email and pass.
  //     // [START createwithemail]
  //     firebase.auth().createUserWithEmailAndPassword(this.useremail, this.password)
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;

  //       if (errorCode === 'auth/weak-password') {
  //         this.noteSvc.showError(
  //           'Sign Up Failed',
  //           'Password entered is too weak!'
  //         );
  //         $('.notification-btn').click();
  //       } else {
  //         this.noteSvc.showError(
  //           'Error during signup',
  //           errorMessage
  //         );
  //         $('.notification-btn').click();
  //       }
  //       console.log(error);
  //     });
  //   }
  // }


  onLogout() {
    this.authServ.logout();
  }

  onSignIn() {
    this.authServ.loginWithMailPassword(this.useremail, this.password);
  }

  // onSignIn() {
  //   debugger;
  //   if (firebase.auth().currentUser) {
  //     // [START signout]
  //       firebase.auth().signOut();

  //       $('#quickstart-sign-in').removeClass('btn-danger');
  //       $('#quickstart-sign-in').addClass('btn-primary');
  //       $('#quickstart-sign-in').css('float', 'left');

  //       document.getElementById('login-section').hidden = false;
  //     // [END signout]
  //   } else {
  //     if (this.useremail === undefined) {
  //       this.noteSvc.showError(
  //         'Invalid Information',
  //         'Please enter valid user name!'
  //       );
  //       $('.notification-btn').click();
  //       return;
  //     } else if (this.password === undefined) {
  //       this.noteSvc.showError(
  //         'Invalid Information',
  //         'Please enter valid password!'
  //       );
  //       // $('.notification-btn').click();
  //       return;
  //     }
  //     const email = this.useremail;
  //     const pass = this.password;
  //     firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  //     .then(() => {
  //       // Existing and future Auth states are now persisted in the current
  //       // session only. Closing the window would clear any existing state even
  //       // if a user forgets to sign out.
  //       // ...
  //       // New sign-in will be persisted with session persistence.
  //       return firebase.auth().signInWithEmailAndPassword(email, pass);
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       this.noteSvc.showError(
  //         'Error during Login',
  //          error.message
  //       );
  //       // $('.notification-btn').click();
  //     });
  //     // [END authwithemail]
  //   }
  //   $('#quickstart-sign-in').removeAttr('disabled');
  //   // document.getElementById('quickstart-sign-in').disabled = true;
  // }


  // authChanged() {

  //   firebase.auth().onAuthStateChanged((user) => {
  //       // [START_EXCLUDE silent]
  //     $('#quickstart-sign-in').removeAttr('disabled');
  //    // document.getElementById('quickstart-verify-email').disabled = true;
  //     // [END_EXCLUDE]
  //     if (user) {
  //       // User is signed in.
  //       const displayName = user.displayName;
  //       const email = user.email;
  //       const emailVerified = user.emailVerified;
  //       const photoURL = user.photoURL;
  //       const isAnonymous = user.isAnonymous;
  //       const uid = user.uid;
  //       const providerData = user.providerData;
  //       // [START_EXCLUDE]
  //       document.getElementById('quickstart-sign-in').textContent = 'Sign out';
  //       $('#quickstart-sign-in').removeClass('btn-primary');
  //       $('#quickstart-sign-in').addClass('btn-danger');
  //       $('#quickstart-sign-in').css('float', 'right');
  //       document.getElementById('login-section').hidden = true;

  //       if (!emailVerified) {
  //         $('#quickstart-sign-in').removeAttr('disabled');
  //       }
  //       // [END_EXCLUDE]
  //     } else {
  //       // User is signed out.
  //       // [START_EXCLUDE]
  //       document.getElementById('quickstart-sign-in').textContent = 'Sign in';
  //       document.getElementById('quickstart-sign-in').setAttribute('style', 'float: left');
  //       // [END_EXCLUDE]
  //     }
  //     // [START_EXCLUDE silent]
  //     $('#quickstart-sign-in').removeAttr('disabled');
  //     // [END_EXCLUDE]
  //   });
  // }

  // onSendPasswordReset() {

  //     firebase.auth().sendPasswordResetEmail(this.useremail).then(() => {
  //       this.noteSvc.showError(
  //         'Email Sent',
  //         'Email sent with instructions. Please follow'
  //       );
  //       $('.notification-btn').click();
  //       // [END_EXCLUDE]
  //     }).catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // [START_EXCLUDE]
  //       if (errorCode === 'auth/invalid-email') {
  //         this.noteSvc.showError(
  //           'Error during password reset',
  //           'Invalid Email Id provided!'
  //         );
  //         $('.notification-btn').click();
  //       } else if (errorCode === 'auth/user-not-found') {
  //         this.noteSvc.showError(
  //           'Error during password reset',
  //           'Sorry. User not found.'
  //         );
  //         $('.notification-btn').click();
  //       } else {
  //         this.noteSvc.showError(
  //           'Error during password reset',
  //           error
  //         );
  //         $('.notification-btn').click();
  //       }

  //     });
  // }




}
