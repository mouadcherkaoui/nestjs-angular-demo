import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import * as firebase from 'firebase';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  constructor(private readonly firebaseAuth: AngularFireAuth) { 
    this.user = firebaseAuth.authState;
  }

  async isAuthenticated() {
    return this.user !== undefined;
  }

  async externalLogin() {
    const result = await this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
    if(result.user.uid) {
      localStorage.setItem('currentUserUid', result.user.uid);
    }
    return result.user;
  }
  
  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }
}
