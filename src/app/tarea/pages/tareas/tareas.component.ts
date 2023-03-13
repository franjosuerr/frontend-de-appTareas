import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent implements OnInit {
  user: any;
  constructor(private AuthService: AuthService) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')||"");
    
  }
}
