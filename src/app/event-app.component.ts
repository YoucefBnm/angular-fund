import { Component } from '@angular/core';

@Component({
  selector: 'event-app',
  template: `
    <nav></nav>
    <events-list></events-list>
  `
})
export class EventAppComponent {
  title = 'event app';
}
