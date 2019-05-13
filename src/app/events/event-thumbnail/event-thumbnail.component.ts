import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  // This is will be the name of the input parameter in the HTML template in braces
  // for parent-child component communication
  @Input() event: any;
  @Output() eventClick = new EventEmitter();
  someProperty: any = 'Some Property Value';

  handleClickMe() {
    this.eventClick.emit('Foo');
  }

  logBar() {
    console.log('Bar');
  }

  constructor() {
  }

  ngOnInit() {
  }

}
