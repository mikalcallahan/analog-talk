// src/app/pages/help/(message-list).page.ts

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';

export interface MessageAttributes {
  title: string;
  slug: string;
  description: string;
}

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <ul>
      @for (message of messages; track message.slug) {
        <li>
          <a [routerLink]="['/help', message.slug]">{{
            message.attributes.title
          }}</a>
        </li>
      }
    </ul>
  `,
})
export default class MessagesListPage {
  readonly messages = injectContentFiles<MessageAttributes>((contentFile) =>
    contentFile.filename.includes('/src/content/help/'),
  );
}
