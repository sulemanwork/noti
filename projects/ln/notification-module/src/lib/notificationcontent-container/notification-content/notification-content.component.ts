import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'notification-content',
  templateUrl: './notification-content.component.html',
  styleUrls: ['./notification-content.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
