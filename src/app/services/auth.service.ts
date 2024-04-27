import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { delay, of, tap } from 'rxjs';

@Injectable()
export class AuthService {
  private readonly httpClient = inject(HttpClient);

  login(credentials: { username: string; password: string }) {
    console.log('AuthService#login');
    // return of(console.log('login success')).pipe(delay(500));

    return this.httpClient
      .post('http://localhost:4200/api/v1/auth/login', {
        credentials,
      })
      .pipe(tap((value) => console.log('response is ', value)));
  }
}
