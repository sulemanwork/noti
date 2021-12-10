import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadModelComponent } from './read-model.component';

describe('ReadModelComponent', () => {
  let component: ReadModelComponent;
  let fixture: ComponentFixture<ReadModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
