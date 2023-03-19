import { Component, ElementRef } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CalendarState, decreaseMonth, increaseMonth, setSelectedDate, setTimePeriodDate } from '../../../store/reducers/calendar.reducer';
import { selectCalendarDate, selectCalendarTimePeriodDate, selectCalendarTimePeriodMonthCountDays, selectCalendarTimePeriodMonthInfo, selectCalendarTimePeriodMonthStartWeekDay, selectCurrentMonth } from '../../../store/selectors/calendar.selectors';

@Component({
  selector: 'app-mcstm-calendar-day',
  templateUrl: './mcstm-calendar-day.component.html',
  styleUrls: ['./mcstm-calendar-day.component.scss']
})
export class McstmCalendarDayComponent {

  public timePeriodDate$ : Observable<Date> = this.store$.pipe(select(selectCalendarTimePeriodDate));
  public selectedDate$ : Observable<Date> = this.store$.pipe(select(selectCalendarDate));

  public timePeriodMonthInfo$: Observable<any> = this.store$.pipe(select(selectCalendarTimePeriodMonthInfo));
  public currentMonth$: Observable<any> = this.store$.pipe(select(selectCurrentMonth));

  constructor(private eRef: ElementRef, private store$:Store<CalendarState>) {

  }

  public selectDate(event:any, timePeriodDate:Date) {
    const target = event.target || event.srcElement || event.currentTarget;
    const dayNum: number = parseInt(target.innerHTML.trim());
    const newDate:Date = new Date(timePeriodDate.getFullYear(), timePeriodDate.getMonth(), dayNum);
    this.store$.dispatch(setTimePeriodDate({date: newDate}));
    this.store$.dispatch(setSelectedDate({date: newDate}));

  }

  //Перейти к пред месяцу
  public goPrevMonth() {
    this.store$.dispatch(decreaseMonth());
  }

  //Перейти к  след месяцу
  public goNextMonth() {
    this.store$.dispatch(increaseMonth());
  }

  //Проверка на сегодняшний день
  public isToday(dayNum: number, timePeriodDate:Date): boolean {
    const today: Date = new Date();
    today.setHours(0, 0, 0, 0);
    const compareDate: Date = new Date(timePeriodDate.getFullYear(), timePeriodDate.getMonth(), dayNum);
    return (compareDate.getTime() === today.getTime());
  }

   //Проверка на выбранную дату
  public isSelected(dayNum: number, timePeriodDate:Date, selectedDate:Date): boolean {
    const compareDate: Date = new Date(timePeriodDate.getFullYear(), timePeriodDate.getMonth(), dayNum);
    return (compareDate.getTime() === selectedDate.getTime());
  }
}
