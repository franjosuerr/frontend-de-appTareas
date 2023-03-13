import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  miForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(
    private autservice: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  Error(title: string, error: string) {
    if (error===undefined) {
      error = "Debe llenar bien todos los campos"
    }
    Swal.fire({
      title: title,
      icon: 'error',
      text: 'Error de autenticacion: ' + error,
    });
  }

  Registrar() {
    const { password, password2 } = this.miForm.value;
    if (password === password2) {
      this.autservice.register(this.miForm.value).subscribe((data) => {
        if (data === true) {
          localStorage.setItem('user', JSON.stringify(this.autservice.user));
          this.router.navigateByUrl('/tareas');
        } else {
          this.Error('Error', data.msg);
        }
      });
    } else {
      this.Error('Error', 'Las contraseñas no coinsiden');
    }
  }
}
