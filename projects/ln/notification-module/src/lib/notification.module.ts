import { NgModule } from '@angular/core';
import { NotificationComponent } from './notification.component';
import { NotificationcontentContainerComponent } from './notificationcontent-container/notificationcontent-container.component';
import { NotificationContentComponent } from './notificationcontent-container/notification-content/notification-content.component';
import { NotificationRowComponent } from './notificationcontent-container/notification-content/notification-row/notification-row.component';
import { CommonModule } from '@angular/common';
import { NotificationToolbarComponent } from './notificationcontent-container/notification-content/notification-toolbar/notification-toolbar.component';
import { DeleteModelComponent } from './notificationcontent-container/notification-content/notification-toolbar/delete-model/delete-model.component';
import { ReadModelComponent } from './notificationcontent-container/notification-content/notification-toolbar/read-model/read-model.component';
import { UnreadModelComponent } from './notificationcontent-container/notification-content/notification-toolbar/unread-model/unread-model.component';
import { PaginationComponent } from "./notificationcontent-container/notification-content/pagination/pagination.component"


@NgModule({
  declarations: [
    NotificationComponent,
    NotificationcontentContainerComponent,
    NotificationContentComponent,
    NotificationRowComponent,
    NotificationToolbarComponent,
    DeleteModelComponent,
    ReadModelComponent,
    UnreadModelComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotificationComponent,
    NotificationcontentContainerComponent,
    NotificationContentComponent,
    NotificationRowComponent,
    NotificationToolbarComponent,
    PaginationComponent
  ]
})
export class NotificationModule { }
