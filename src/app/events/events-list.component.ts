import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  // This will be the name of the value will will set for the input param
  // in the child component
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England '
    }
  };

  handleClickEvent(data) {
    console.log('received:', data);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
