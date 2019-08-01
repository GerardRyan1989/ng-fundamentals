
import {Component, forwardRef, Inject, OnInit} from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image { height: 100px; }
  `]
})

export class EventDetailsComponent {
  event: any;
  // tslint:disable-next-line:max-line-length
  constructor(@Inject(forwardRef(() => EventService))private eventService: EventService, @Inject(forwardRef(() => ActivatedRoute)) private route: ActivatedRoute) {

  }

  /* tslint:disable:no-string-literal */
  ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }
}
