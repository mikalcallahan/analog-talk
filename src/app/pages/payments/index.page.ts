import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  template: `<div>Payments page</div>
    <button (click)="makePayment()">make payment</button>`,
  standalone: true,
})
export default class PaymentsPage {
  private readonly router = inject(Router);
  makePayment() {
    this.router.navigateByUrl('/payments/make-payment');
  }
}
