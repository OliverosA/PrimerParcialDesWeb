import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObtenerInfoElementoService {
  @Output() disparadorDeElemento: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
}
