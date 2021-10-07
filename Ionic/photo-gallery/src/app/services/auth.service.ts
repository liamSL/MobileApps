import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  loggedIn = false;
    
    isLoggedIn() {
      return this.loggedIn;
    }

    async signInWithEmail(email: String, password: String) {
      if (email === 'testuser' && password === 'temp') {
      this.loggedIn = true;
      alert("Sign in pressed");
    } else {
      throw new Error("Invalid credentials");
      }
    }
}
