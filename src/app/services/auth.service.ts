import { environment } from './../../environment/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of, tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.baseUrl;
  private _user: any = null;

  get user() {
    return this._user;
  }
  constructor(private httpClient: HttpClient) {}

  loguin(data: { email: string; password: string }) {
    return this.httpClient.post<any>(this.baseUrl + '/auth/login', data).pipe(
      tap((res) => {
        if (res.ok === true) {
          this._user = {
            id: res.id,
            username: res.username,
            token: res.token,
          };
        } else {
          this._user = null;
        }
      }),
      map((res) => res.ok),
      catchError((err) => of(err.error))
    );
  }

  register(data: any) {
    return this.httpClient
      .post<any>(`${this.baseUrl}/auth/register`, data)
      .pipe(
        tap((res) => {
          if (res.ok === true) {
            this._user = {
              id: res.id,
              username: res.username,
              token: res.token,
            };
          } else {
            this._user = null;
          }
        }),
        map((res) => res.ok),
        catchError((err) => of(err.error))
      );
  }

  validarToken(): Observable<boolean> {
    const token = JSON.parse(localStorage.getItem('user')!);

    if (token) {
      return new Observable((suscribe) => suscribe.next(true));
    } else {
      return new Observable((suscribe) => suscribe.next(false));
    }
  }
}
