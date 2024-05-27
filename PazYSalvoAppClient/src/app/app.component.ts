import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from "./components/side-menu/side-menu.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from './components/login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from './shared.service';
import { RouterModule, Routes, Router } from '@angular/router';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,
      SideMenuComponent,
      NavbarComponent,]
})
export class AppComponent {
  itle = 'PazYSalvoAppClient';

  constructor(
    public dialog: MatDialog,
    private sharedService: SharedService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.router.navigate(['/']);
  }

  openLoginModal(): void {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('La modal se cerró');
    });
  }

  onLoginSuccess(isAdmin: any): void {
    this.sharedService.setAdmin(isAdmin);
  }
}
