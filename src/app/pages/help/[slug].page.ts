import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MessageAttributes } from './(messages-list).page';

@Component({
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe],
  template: `
    @if (messages$ | async; as message) {
      <ng-container>
        <h1>{{ message.attributes.title }}</h1>
        <analog-markdown [content]="message.content" />
      </ng-container>
    }
  `,
})
export default class MessagePage {
  readonly messages$ = injectContent<MessageAttributes>({
    param: 'slug',
    subdirectory: 'help',
  });
}
