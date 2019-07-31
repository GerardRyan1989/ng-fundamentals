import {Component, forwardRef, Inject, Injectable, Input, OnInit} from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared/event.service';


@Component({
  template: `
      <div>
          <h1>Upcoming Angular events</h1>
          <hr>
          <div class="row">
              <div *ngFor="let event of events" class="col-md-5">
                  <app-event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></app-event-thumbnail>
              </div>
          </div>
      </div>
  `
})

@Input()
export class EventsListComponent implements OnInit {
  events: any[];

  constructor(@Inject(forwardRef(() => EventService))private eventService: EventService, @Inject(forwardRef(() => ToastrService))private toastr: ToastrService) {

  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName) {
      console.log('Click Successful');
      this.toastr.success(eventName);
  }
}
