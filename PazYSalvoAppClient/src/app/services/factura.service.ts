import { Inject, Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClient  } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SharedService } from '../shared.service';
import { factura } from '../models/factura.model';


@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private baseUrl = 'https://localhost:7285/api/factura'; // OJO - Debe ser de acuerdo al puerto que estén utilizando en sus máquinas

  constructor(
    @Inject(HttpClient) private http: HttpClient,
    // private http: HttpClient
  ) { }

  // LEER LOS ELEMENTOS DESDE BD

  cargarFacturas(): Observable<factura[]> {
    return of([]);
  }

  // NUEVO

  // EDITAR

}
