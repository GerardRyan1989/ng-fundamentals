import {Component, forwardRef, Inject} from '@angular/core';
import {EventService} from './shared/event.service';
import {Router} from '@angular/router';
@Component({
  template: `
    <h1>New Event</h1>
    <br>
    <div class ="col-md-6">
        <h3>[Create  Event Form will go here</h3>
        <br>
        <br>
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>

    </div>
  `
})

export class CreateEventComponent {


  constructor(@Inject(forwardRef(() => Router))private router: Router) {

  }

  cancel() {
        this.router.navigate(['/events']);
  }
}
