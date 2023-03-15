import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../../services/tareas.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent implements OnInit {
  tareas: Array<any> = [];
  user: any;
  Tarea: string = '';
  constructor(private tareaService: TareasService, private route: Router) {}

  ngOnInit(): void {
    this.user = this.tareaService.user;
    this.tareaService.Read().subscribe(
      (data) => {
        console.log(data);
        this.tareas = data.tareas;
      },
      (err) => {
        localStorage.clear();
        this.route.navigate(['/auth/login']);
        console.log(err);
      }
    );
  }
  Salir() {
    localStorage.clear();
    this.route.navigate(['/auth/login']);
  }
  Eliminar(id: string) {
    this.tareaService.Delete(id).subscribe((data) => {
      this.ngOnInit();
    });
  }
  Error(title: string, error: string) {
    Swal.fire({
      title: title,
      icon: 'error',
      text: 'Error de autenticacion ' + error,
    });
  }
  CrearTarea(tarea: string) {
    this.tareaService.NuevaTarea(tarea).subscribe(
      (data) => {
        this.ngOnInit();
        this.Tarea = '';
      },
      (err) => {
        this.Error('Debe poner una tarea', err);
        console.log(err);
      }
    );
  }
  Update(tarea: any) {
    const { _id, nombre } = tarea;
    this.route.navigate([`/tareas/${_id}/${nombre}`]);
  }
}
