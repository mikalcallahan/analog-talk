import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <h2>Payment Details</h2>

    ID: {{ paymentId$ | async }}
  `,
})
export default class PaymentDetailsPage {
  private readonly route = inject(ActivatedRoute);

  readonly paymentId$ = this.route.paramMap.pipe(
    map((params) => params.get('paymentId')),
  );
}
