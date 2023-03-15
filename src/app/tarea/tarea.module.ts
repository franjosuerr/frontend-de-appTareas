import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareaRoutingModule } from './tarea-routing.module';
import { TareasComponent } from './pages/tareas/tareas.component';
import { FormsModule } from '@angular/forms';
import { TareasUpdateComponent } from './pages/tareas-update/tareas-update.component';

@NgModule({
  declarations: [TareasComponent, TareasUpdateComponent],
  imports: [CommonModule, TareaRoutingModule, FormsModule],
})
export class TareaModule {}
