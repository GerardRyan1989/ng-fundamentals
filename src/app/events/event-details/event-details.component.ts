
import {Component, forwardRef, Inject, OnInit} from '@angular/core';
import { EventService } from '../shared';
import { ActivatedRoute} from '@angular/router';
import {IEvent, ISession} from '../shared';
import {Params} from '@angular/router/src/shared';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image { height: 100px; }
    a {cursor: pointer}
  `]
})

export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'votes';
  // tslint:disable-next-line:max-line-length
  constructor(@Inject(forwardRef(() => EventService))private eventService: EventService, @Inject(forwardRef(() => ActivatedRoute)) private route: ActivatedRoute) {

  }

  /* tslint:disable:no-string-literal */
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.event = this.eventService.getEvent(+params['id']);
      this.addMode = false;
    });
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
      const nextId = Math.max.apply(null, this.event.sessions.map(
        s => s.id));

      session.id = nextId + 1;
      this.event.sessions.push(session);
      this.eventService.updateEvent(this.event);
      this.addMode = false;
  }

  cancelAddSession() {
      this.addMode = false;
  }

}
