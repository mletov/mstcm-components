import { ComponentFixture, TestBed } from '@angular/core/testing';
import { McstmCalendarMonthComponent } from './mcstm-calendar-month.component';



describe('McstmCalendarMonthComponentComponent', () => {
  let component: McstmCalendarMonthComponent;
  let fixture: ComponentFixture<McstmCalendarMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McstmCalendarMonthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McstmCalendarMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
