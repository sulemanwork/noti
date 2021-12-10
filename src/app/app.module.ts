import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotificationModule } from 'projects/ln/notification-module/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NotificationcontentContainerComponent } from './notificationcontent-container/notificationcontent-container.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
