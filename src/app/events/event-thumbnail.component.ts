import { Component, Input } from '@angular/core'
import { IEvent } from './shared'

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{ event?.name }}</h2>
      <div>Date: {{event?.date}}</div>
      <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: \${{event?.price}}</div>
      <div [hidden]="!event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="mar-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div [hidden]="!event?.onlineUrl">
        Online URL: {{event?.onlineUrl}}
    </div>
  `,
  styles:[
    `
    .green { color: #cceeaa !important; }
    .red { color: rgb(255,10,125) !important; }
    .bold { font-weight: bold; }
    .thumbnail { min-height: 210px; }
    .mar-left { margin-left: 10px; }
    .well div { color: #bbb; }
    `
  ]
})

export class EventThumbnailComponent {
  @Input() event:IEvent

  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am')
      return ['green', 'bold']
    if (this.event && this.event.time === '10:00 am')
      return ['red', 'bold']
    return []
  }
}

