import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  private baseUrl = environment.baseUrl;
  private _user: any = JSON.parse(localStorage.getItem('user')!);

  get user() {
    return this._user;
  }

  constructor(private httpClient: HttpClient) {}

  Read() {
    this._user = JSON.parse(localStorage.getItem('user')!);
    const headers = { 'x-auth-token': this.user.token };

    return this.httpClient.get<any>(`${this.baseUrl}/tarea/read`, {
      headers,
    });
  }
  Delete(id: string) {
    const headers = { 'x-auth-token': this.user.token };
    return this.httpClient.delete<any>(`${this.baseUrl}/tarea/delete/${id}`, {
      headers,
    });
  }
  NuevaTarea(valueTarea: string) {
    const headers = {
      'x-auth-token': this.user.token,
    };

    return this.httpClient.post<any>(
      `${this.baseUrl}/tarea/create`,
      { nombre: valueTarea },
      {
        headers,
      }
    );
  }
  UpdateTarea(valueTarea: string, id: string) {
    const headers = {
      'x-auth-token': this.user.token,
    };

    return this.httpClient.put<any>(
      `${this.baseUrl}/tarea/update/${id}`,
      { nombre: valueTarea },
      {
        headers,
      }
    );
  }
}
