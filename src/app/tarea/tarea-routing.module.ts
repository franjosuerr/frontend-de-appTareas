import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasComponent } from './pages/tareas/tareas.component';
import { TareasUpdateComponent } from './pages/tareas-update/tareas-update.component';

const routes: Routes = [
  {
    path: '',
    component: TareasComponent,
  },
  {
    path: ':idTarea/:tarea',
    component: TareasUpdateComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TareaRoutingModule {}
