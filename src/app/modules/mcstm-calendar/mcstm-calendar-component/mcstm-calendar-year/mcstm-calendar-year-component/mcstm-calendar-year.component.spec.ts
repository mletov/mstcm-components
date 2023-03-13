import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McstmCalendarYearComponent } from './mcstm-calendar-year.component';

describe('McstmCalendarYearComponentComponent', () => {
  let component: McstmCalendarYearComponent;
  let fixture: ComponentFixture<McstmCalendarYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McstmCalendarYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McstmCalendarYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
