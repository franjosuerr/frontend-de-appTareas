import { Component } from '@angular/core';
import { TareasService } from '../../../services/tareas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tareas-update',
  templateUrl: './tareas-update.component.html',
  styleUrls: ['./tareas-update.component.css'],
})
export class TareasUpdateComponent {
  Tarea: string = '';
  id: string = '';
  constructor(
    private TareasService: TareasService,
    private route: Router,
    private activareRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activareRoute.params.subscribe((params) => {
      const { tarea, idTarea } = params;
      this.Tarea = tarea;
      this.id = idTarea;
    });
  }
  ActualizarTarea(Tarea: string) {
    this.TareasService.UpdateTarea(Tarea, this.id).subscribe((data) => {
      this.route.navigate([`/tareas/`]);
    });
  }
}
