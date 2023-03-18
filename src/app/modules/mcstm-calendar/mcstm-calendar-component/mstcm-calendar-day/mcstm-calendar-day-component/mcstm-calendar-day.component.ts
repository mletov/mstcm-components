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


  public timePeriodMonthInfo$: Observable<any> = this.store$.pipe(select(selectCalendarTimePeriodMonthInfo));

  constructor(private eRef: ElementRef, private store$:Store<CalendarState>) {


  }

  public selectDate(event:any) {
    const target = event.target || event.srcElement || event.currentTarget;
    const dayNum: number = parseInt(target.innerHTML.trim());
    //console.log(event);
    /*  var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue; */

  }

  public goPrevMonth() {

  }

  public goNextMonth() {

  }

}
