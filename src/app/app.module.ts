import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './event-app.component';
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavComponent } from './nav/nav.component'
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventAppComponent,
    NavComponent,
    EventsListComponent,
    EventThumbnailComponent
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
