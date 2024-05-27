import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { FacturaService } from '../../services/factura.service';
// import { factura } from '../../models/factura.model';
import { Router } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';

// const FACTURAS: factura[] = [
//   { saldo: 100, clienteId: 1, servicioAdquiridoId: 101, medioDePagoId: 201, estadoId: 301 },
//   { saldo: 150, clienteId: 2, servicioAdquiridoId: 102, medioDePagoId: 202, estadoId: 302 },
//   { saldo: 200, clienteId: 3, servicioAdquiridoId: 103, medioDePagoId: 203, estadoId: 303 },
//   { saldo: 250, clienteId: 4, servicioAdquiridoId: 104, medioDePagoId: 204, estadoId: 304 },
//   { saldo: 300, clienteId: 5, servicioAdquiridoId: 105, medioDePagoId: 205, estadoId: 305 }
// ];

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
  // dataSource = FACTURAS;
  constructor(
    private facturaService: FacturaService,
    private router: Router
  ) { }

  dataSource:any[] = [];
  ngOnInit(): void {
    this.cargarFacturas();
  }

  navegarNuevaFactura() {
    this.router.navigate(['formFactura']); // 'formFactura' es la ruta del componente 'formulario-factura'
    console.log("evento neuva factura");
  }

  cargarFacturas(): void {

    console.log("cargar factura");
  }
}
