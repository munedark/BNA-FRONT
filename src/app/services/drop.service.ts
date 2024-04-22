import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropService {

  private _isUserOpen = new BehaviorSubject<boolean>(false);
  isUserOpen$ = this._isUserOpen.asObservable();
  private _isNotifOpen = new BehaviorSubject<boolean>(false);
  isNotifOpen$ = this._isNotifOpen.asObservable();

  toggleIcon(): void {
    if (!this._isUserOpen.value) {
      this._isUserOpen.next(true);
      this._isNotifOpen.next(false);
    } else {
      this._isUserOpen.next(false);
    }
  }

  toggleBell(): void {
    if (!this._isNotifOpen.value) {
      this._isNotifOpen.next(true);
      this._isUserOpen.next(false);
    } else {
      this._isNotifOpen.next(false);
    }
  }
  closeDrop(): void {
    this._isNotifOpen.next(false);
  }
    

  constructor() { }
}
