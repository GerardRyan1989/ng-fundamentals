import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {forwardRef, Inject, Injectable} from '@angular/core';
import {EventService} from '../shared/event.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate {

  constructor(@Inject(forwardRef(() => EventService))private eventService: EventService,
              @Inject(forwardRef(() => Router)) private router: Router) {

  }

  /* tslint:disable:no-string-literal */
  canActivate(route: ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEvent(+route.params['id']);

    if (!eventExists) {
      this.router.navigate(['/404']);
    }

    return eventExists;
  }
}
