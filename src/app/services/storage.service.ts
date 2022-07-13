import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public saveToStorage(key: any, val: any) {
    localStorage.setItem(key, JSON.stringify(val))
  }
  public loadFromStorage(key: any) {
    let val: any = localStorage.getItem(key)
    return JSON.parse(val)
  }
  public saveToSesStorage(key: any, val: any) {
    sessionStorage.setItem(key, JSON.stringify(val))
  }
  public loadFromSesStorage(key: any) {
    let val: any = sessionStorage.getItem(key)
    return JSON.parse(val)
  }
}
