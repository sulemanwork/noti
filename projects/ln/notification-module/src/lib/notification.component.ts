import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'notification-container',
  templateUrl: "notification.html",
  styleUrls: ["notification.less"],
  encapsulation: ViewEncapsulation.None
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
