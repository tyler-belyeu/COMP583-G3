import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private auth: AngularFireAuth
  ) { }

  signIn(params: SignIn): Observable<any> {
    return from(this.auth.signInWithEmailAndPassword(
      params.email, params.password
    ));
  }

  signUp(params: SignIn): Observable<any> {
    return from(this.auth.createUserWithEmailAndPassword(
      params.email, params.password
    ));
  }
}

type SignIn = {
  email: string;
  password: string;
}
