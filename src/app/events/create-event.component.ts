import {Component, forwardRef, Inject} from '@angular/core';
import { EventService } from './shared';
import {Router} from '@angular/router';
@Component({
  templateUrl: `create-event.component.html`,
  styles: [`
      em { float: right; color: #E05C65; padding-left: 10px; }
      .error input { background-color: #E3C3C5; }
      .error ::-webkit-input-placeholder {color: #999; }
      .error ::-moz-placeholder { color: #999; }
      .error :-moz-placeholder { color: #999; }
      .error :-ms-input-placeholder { color: #999;}
  `]
})

export class CreateEventComponent {

  isDirty = true;
  constructor(@Inject(forwardRef(() => Router))private router: Router,
              @Inject(forwardRef(() => EventService))private eventService: EventService) {

  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false;
      this.router.navigate(['/events']);
    });
  }


  cancel() {
        this.router.navigate(['/events']);
  }
}
