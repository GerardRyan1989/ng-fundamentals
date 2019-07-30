import  { Component } from '@angular/core'

@Component({
  selector: 'app-events-list',
  template: `
      <div>
          <h1>Upcoming Angular events</h1>
          <hr>
          <div class="well hoverwell thmbnail">
              <h2>{{event.name}}</h2>
              <div>Date: {{event.date}}</div>
              <div>Time: {{event.time}}</div>
              <div>Price: \${{event.price}}</div>
              <div>
                  <span>Location: {{event.location.address}}</span>
                  <span> &nbsp;</span>
                  <span>{{event.location.city}} , {{event.location.country}}</span>
              </div>
          </div>
      </div>`
})

export class EventsListComponent {
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '11/07/2019',
    time:  '09.00 am',
    price: 70,
    imageUrl: 'assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'Limerick',
      country: 'Ireland',
    }
  }
}
