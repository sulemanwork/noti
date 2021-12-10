import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationcontentContainerComponent } from './notificationcontent-container.component';

describe('NotificationcontentContainerComponent', () => {
  let component: NotificationcontentContainerComponent;
  let fixture: ComponentFixture<NotificationcontentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationcontentContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationcontentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
