import { Component, ElementRef } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CalendarState } from '../../../store/reducers/calendar.reducer';
import { selectCalendarDate, selectCalendarTimePeriodDate, selectCalendarTimePeriodMonthCountDays, selectCalendarTimePeriodMonthInfo, selectCalendarTimePeriodMonthStartWeekDay } from '../../../store/selectors/calendar.selectors';

@Component({
  selector: 'app-mcstm-calendar-day',
  templateUrl: './mcstm-calendar-day.component.html',
  styleUrls: ['./mcstm-calendar-day.component.scss']
})
export class McstmCalendarDayComponent {

  public countDays$: Observable<number> = this.store$.pipe(select(selectCalendarTimePeriodMonthCountDays));

  public startWeekDay$: Observable<number> = this.store$.pipe(select(selectCalendarTimePeriodMonthStartWeekDay));

  public timePeriodMonthInfo$: Observable<any> = this.store$.pipe(select(selectCalendarTimePeriodMonthInfo));

  constructor(private eRef: ElementRef, private store$:Store<CalendarState>) {


  }


  public goPrevMonth() {

  }

  public goNextMonth() {

  }

}
