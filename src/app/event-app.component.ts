import { Component } from '@angular/core';

@Component({
  selector: 'event-app',
  template: `
    <nav></nav>
    <router-outlet></router-outlet>
  `
})
export class EventAppComponent {
  title = 'event app';
}
