import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Transactions</h1>

    <router-outlet></router-outlet>
  `,
})
export default class TransactionsPage {}
