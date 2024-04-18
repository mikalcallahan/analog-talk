import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable()
export class AuthService {
  private readonly httpClient = inject(HttpClient);

  login(credentials: { username: string; password: string }) {
    console.log('AuthService#login');
    return of(console.log('login success')).pipe(delay(500));
    // return this.httpClient.post('/api/login', { credentials });
  }
}
