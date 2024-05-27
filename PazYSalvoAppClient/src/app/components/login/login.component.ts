import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output() loginSuccess = new EventEmitter<boolean>();
  isAdmin:boolean = false;
  loginForm!: FormGroup;

  constructor(
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<LoginComponent>,
    private fb: FormBuilder,
    private sharedService: SharedService
  ) { }

  modalLogin() {
    let dialogRef = this.dialog.open(LoginComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    // Validar el usuario y la contraseña
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      console.log('Nombre de usuario:', username);
      console.log('Contraseña:', password);
      /*
      1- enviar las credenciales a un servicio de autenticación
      2- Ejecutar consulta a BD
      3- Retorno el resultado
      */
    if (username === 'admin' && password === 'admin') {
      alert('Inicio de sesión exitoso como ' + username);
      this.sharedService.setAdmin(!this.isAdmin);
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
      this.sharedService.setAdmin(this.isAdmin);
    }
      this.dialogRef.close();
    }
  }
  closeLogin() {
    this.dialogRef.close();
  }
}
