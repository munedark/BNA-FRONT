import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropService {

  private _isUserOpen = new BehaviorSubject<boolean>(false);
  isUserOpen$ = this._isUserOpen.asObservable();

  toggleIcon(): void {
    this._isUserOpen.next(!this._isUserOpen.value);
  }
  constructor() { }
}