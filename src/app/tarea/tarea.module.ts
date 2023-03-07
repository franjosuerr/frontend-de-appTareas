import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareaRoutingModule } from './tarea-routing.module';
import { TareasComponent } from './pages/tareas/tareas.component';


@NgModule({
  declarations: [
    TareasComponent
  ],
  imports: [
    CommonModule,
    TareaRoutingModule
  ]
})
export class TareaModule { }
