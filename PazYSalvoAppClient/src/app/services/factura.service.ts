import { Inject, Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SharedService } from '../shared.service';
import { factura } from '../models/factura.model';


@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private baseUrl = 'https://localhost:7285/api/factura';

  constructor(
    @Inject(HttpClient) private http: HttpClient,
  ) { }

  cargarFacturas(): Observable<factura[]> {
    return of([]);
  }
}
