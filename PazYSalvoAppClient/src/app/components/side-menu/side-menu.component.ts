import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { SharedService } from '../../shared.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    CommonModule
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  isAdmin:boolean = false;

  constructor(
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sharedService.isAdmin$.subscribe(isAdmin => {
      this.isAdmin = isAdmin;
    });
  }
  
  navegarFacturas() {
    this.router.navigate(['facturas']); // 'facturas' es la ruta del componente 'Facturas'
  }


}
