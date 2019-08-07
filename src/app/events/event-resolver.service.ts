import {forwardRef, Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { EventService} from './shared';

@Injectable()
export class EventsResolverService implements Resolve<any> {

  constructor(@Inject(forwardRef(() => EventService)) private eventService: EventService) {

  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(route.params.id);
  }
}
