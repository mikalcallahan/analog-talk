import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { Transaction } from 'src/app/core/types';

@Component({
  standalone: true,
  template: `
    @if (transactions$ | async; as transactions) {
      @for (transaction of transactions; track transaction.id) {
        <li>
          <a [routerLink]="[transaction.id]">{{ transaction.id }}</a>
        </li>
      }
    } @else {
      Nothing to show
    }
  `,
  imports: [AsyncPipe, RouterLink],
  providers: [HttpClient],
})
export default class TransactionsListPage {
  private readonly httpClient = inject(HttpClient);

  readonly transactions$ = this.httpClient
    .get<Array<{ id: string }>>('http://localhost:4200/api/v1/transactions')
    .pipe(tap((value) => console.log('on transactions - ', value)));
}
