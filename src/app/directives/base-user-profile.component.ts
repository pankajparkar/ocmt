import { Component, Directive } from '@angular/core';

@Directive({
  selector: 'app-base-user-profile',
  standalone: true,
})
export class BaseUserProfileComponent {
  follow() {
    console.log('Followed');
  }

  message() {
    console.log('Message');
  }
}
