import {Component, forwardRef, Inject, Injectable, Input, OnInit} from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute} from '@angular/router';
import { IEvent} from './shared';

@Component({
  template: `
      <div>
          <h1>Upcoming Angular events</h1>
          <hr>
          <div class="row">
              <div *ngFor="let event of events" class="col-md-5">
                  <app-event-thumbnail [event]="event"></app-event-thumbnail>
              </div>
          </div>
      </div>
  `
})

@Input()
export class EventsListComponent implements OnInit {
  events: IEvent[];

  // tslint:disable-next-line:max-line-length
  constructor(@Inject(forwardRef(() => EventService))private eventService: EventService,
              @Inject(forwardRef(() => ActivatedRoute))private route: ActivatedRoute) {

  }

  ngOnInit() {
    /* tslint:disable:no-string-literal */
    this.events = this.route.snapshot.data['events'];
  }


}
