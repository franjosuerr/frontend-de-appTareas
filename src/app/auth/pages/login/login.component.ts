import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  miForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private autservice: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  Error(title: string, error: string) {
    Swal.fire({
      title: title,
      icon: 'error',
      text: 'Error de autenticacion ' + error,
    });
  }

  autenticacion() {
    this.autservice.loguin(this.miForm.value).subscribe((data) => {
      if (data === true) {
        localStorage.setItem('user', JSON.stringify(this.autservice.user));
        this.router.navigateByUrl('/tareas');
      } else {
        this.Error('Error en el autenticacion', data.msg);
      }
    });
  }
}
