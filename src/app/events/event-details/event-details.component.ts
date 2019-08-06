
import {Component, forwardRef, Inject} from '@angular/core';
import { EventService } from '../shared';
import { ActivatedRoute} from '@angular/router';
import {IEvent, ISession} from '../shared';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image { height: 100px; }
    a {cursor: pointer}
  `]
})

export class EventDetailsComponent {
  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'votes';
  // tslint:disable-next-line:max-line-length
  constructor(@Inject(forwardRef(() => EventService))private eventService: EventService, @Inject(forwardRef(() => ActivatedRoute)) private route: ActivatedRoute) {

  }

  /* tslint:disable:no-string-literal */
  ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
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
