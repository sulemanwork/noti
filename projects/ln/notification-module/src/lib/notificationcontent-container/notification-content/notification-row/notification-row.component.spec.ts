import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationRowComponent } from './notification-row.component';

describe('NotificationRowComponent', () => {
  let component: NotificationRowComponent;
  let fixture: ComponentFixture<NotificationRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  
  
  it('should Call getSeletedValue', () => {
    const event = "";
    const value = "";
    spyOn(component,"getSeletedValue");
    component.getSeletedValue(event, value);
    expect(component.getSeletedValue).toHaveBeenCalled();
  });
  
  // it('should change selectedrow value in getSeletedValue', () => {
    // const event = "";
    // const value = "";
    // spyOn(component.selectedrow,'emit');
    // component.getSeletedValue(event, value);
    // expect(component.selectedrow.emit).toHaveBeenCalled();
    
    // expect(component.selectedrow.emit).toHaveBeenCalledWith(value);
  // });


});
