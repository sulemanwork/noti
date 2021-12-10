import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnreadModelComponent } from './unread-model.component';

describe('UnreadModelComponent', () => {
  let component: UnreadModelComponent;
  let fixture: ComponentFixture<UnreadModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnreadModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnreadModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
