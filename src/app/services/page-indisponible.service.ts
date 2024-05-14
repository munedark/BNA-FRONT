import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageIndisponibleService {
  estDansPageNotFound: boolean = false; 

  constructor() { }
}
