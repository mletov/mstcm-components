import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McstmCalendarComponent } from './mcstm-calendar.component';

describe('McstmCalendarComponent', () => {
  let component: McstmCalendarComponent;
  let fixture: ComponentFixture<McstmCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McstmCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McstmCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
