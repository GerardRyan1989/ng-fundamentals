
import {Component, forwardRef, Inject, OnInit} from '@angular/core';
import { EventService} from '../shared/event.service';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image { height: 100px; }
  `]
})

export class EventDetailsComponent {
  event: any;
  constructor(@Inject(forwardRef(() => EventService))private eventService: EventService) {

  }

  ngOnInit() {
        this.event = this.eventService.getEvent(1);
  }
}
