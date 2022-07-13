import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn = true
  cheackLogIn(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.isLoggedIn)
      }, 1000)
    })
  }
}
