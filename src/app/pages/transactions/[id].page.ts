import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Transaction } from 'src/app/core/types';

@Component({
  standalone: true,
  template: `
    <h2>Transaction Details</h2>
    @if (transaction$ | async; as transaction) {
      <ul>
        <li>id: {{ transaction.id }}</li>
        <li>amount: {{ transaction.amount }}</li>
        <li>status: {{ transaction.status }}</li>
      </ul>
    }
  `,
  providers: [HttpClient],
  imports: [AsyncPipe],
})
export default class TransactionDetailsPage {
  private readonly httpClient = inject(HttpClient);
  private readonly route = inject(ActivatedRoute);

  readonly transaction$ = this.route.paramMap.pipe(
    map((params) => params.get('id')),
    switchMap((value) =>
      this.httpClient
        .get<Transaction>(`http://localhost:4200/api/v1/transactions/${value}`)
        .pipe(
          tap((value) => console.log('http client rresult is ', value)),
          catchError((error) => of(console.log('error is - ', error))),
        ),
    ),
  );
}
