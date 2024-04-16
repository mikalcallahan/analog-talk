import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <h2>Payment Details</h2>

    ID: {{ paymentId }}
  `,
})
export default class PaymentDetailsPage {
  @Input() paymentId: string | null = null;
}
