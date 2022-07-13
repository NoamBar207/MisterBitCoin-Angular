import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from '../models/contact.model';
import { User } from '../models/user.model';
import { Move } from '../models/move.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private storageService: StorageService
  ) { }

  user!: User
  private _user$ = new BehaviorSubject<User>({} as User)
  public user$ = this._user$.asObservable()

  siginUp(name: string) {
    let user = {
      name: name,
      coins: 100,
      moves: [],
    }
    this._user$.next(user)
    return user
  }

  loadUser() {
    let user = this.storageService.loadFromSesStorage('userDB')
    this.user = user
    this._user$.next(user)
  }

  addMove(contact: Contact, amount: number) {
    if (this.user.coins - amount < 0) return console.error('Now Enough Coins')
    let move: Move = {
      toId: contact._id!,
      to: contact.name,
      at: Date.now(),
      amount
    }
    this.user.coins -= amount
    this.user.moves.unshift(move)
    this.storageService.saveToSesStorage('userDB', this.user)
    this.loadUser()
  }

  getLoggedUser() {
    return this.storageService.loadFromSesStorage('userDB')
  }
}