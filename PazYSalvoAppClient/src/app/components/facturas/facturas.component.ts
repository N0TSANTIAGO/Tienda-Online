import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { FacturaService } from '../../services/factura.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facturas',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
  ],
  templateUrl: './facturas.component.html',
  styleUrl: './facturas.component.css'
})

export class FacturasComponent {

  @Output() abrirModalEvent = new EventEmitter<void>();

  constructor(
    private facturaService: FacturaService,
    private router: Router
  ) { }

  dataSource:any[] = [];
  ngOnInit(): void {
    this.cargarFacturas();
  }

  navegarNuevaFactura() {
    this.router.navigate(['formFactura']);
    console.log("evento neuva factura");
  }

  cargarFacturas(): void {

    console.log("cargar factura");
  }
}
