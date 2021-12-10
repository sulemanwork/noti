import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationToolbarComponent } from './notification-toolbar.component';

describe('NotificationToolbarComponent', () => {
  let component: NotificationToolbarComponent;
  let fixture: ComponentFixture<NotificationToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  
  it('should Call sortData', () => {
    const event = "dateNew";
    const value = "Date (newest)";
    spyOn(component,"sortData");
    component.sortData(event, value);
    expect(component.sortData).toHaveBeenCalled();
  });

  
  it('should change selectValues value in sortData', () => {
    const event = "dateNew";
    const value = "Date (newest)";
    spyOn(component,"sortData");
    component.sortData(event, value);
    expect(component.selectValue).toEqual(value);
  });
  
  
  it('should change Check value in sortData', () => {
    const event = "dateNew";
    const value = "Date (newest)";
    spyOn(component,"sortData");
    component.sortData(event, value);
    expect(component.sortValueToggle).toBeFalse();
  });
  
  it('should change sortByValues value in sortData', () => {
    const event = "dateNew";
    const value = "Date (newest)";
    spyOn(component.sortByValues,'emit');
    component.sortData(event, value);
    expect(component.sortByValues.emit).toHaveBeenCalled();
    expect(component.sortByValues.emit).toHaveBeenCalledWith(event);
  });
  
  it('should Call sortToggle', () => {
    spyOn(component,"sortToggle")
    component.sortToggle();
    expect(component.sortToggle).toHaveBeenCalled();
  });
  
  
  it('should check value in sortToggle', () => {
    spyOn(component,"sortToggle");
    component.sortToggle();
    expect(component.sortValueToggle).toBeFalse();
  });
  
  it('should Call moreToggle', () => {
    spyOn(component,"moreToggle")
    component.moreToggle();
    expect(component.moreToggle).toHaveBeenCalled();
  });
  
  
  it('should check value in moreToggle', () => {
    spyOn(component,"moreToggle");
    component.moreToggle();
    expect(component.moreValueToggle).toBeFalse();
  });

  
  it('should Call selectAll', () => {
    spyOn(component,"selectAll")
    component.selectAll();
    expect(component.selectAll).toHaveBeenCalled();
  });
  
  it('should check value in selectAll', () => {
    spyOn(component,"selectAll");
    component.selectAll();
    expect(component.selectAllCheckboxes).toBeFalse();
  });
  it('should change checkboxSelectedAll value in selectAll', () => {
    spyOn(component.checkboxSelectedAll,'emit');
    component.selectAll();
    expect(component.checkboxSelectedAll.emit).toHaveBeenCalled();
  });


});
