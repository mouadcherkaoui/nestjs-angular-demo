import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly anfgularFire: AngularFireAuth) { }

  login(user: any) {
    this.anfgularFire.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  async externalLogin() {
    const result = await this.anfgularFire.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
    if(result.user.uid) {
      localStorage.setItem('currentUserUid', result.user.uid);
    }
    return result.user;
  }
}
