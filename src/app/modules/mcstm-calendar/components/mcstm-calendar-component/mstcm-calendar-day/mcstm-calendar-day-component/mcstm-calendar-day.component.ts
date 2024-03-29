import { Component, ElementRef } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Holyday } from '../../../../models/holyday';
import { decreaseMonth, increaseMonth, loadHolydays, setSelectedDate, setTimePeriodDate } from '../../../../store/actions/calendar.actions';
import { CalendarState } from '../../../../store/reducers/calendar.reducer';
import { selectCalendarDate, selectCalendarTimePeriodDate, selectCalendarTimePeriodMonthCountDays, selectCalendarTimePeriodMonthInfo, selectCalendarTimePeriodMonthStartWeekDay, selectCurrentMonth, selectHolydays } from '../../../../store/selectors/calendar.selectors';

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

  public holydays$: Observable<Holyday[]> = this.store$.pipe(
    select(selectHolydays)
  );

  constructor(private eRef: ElementRef, private store$:Store<CalendarState>) {
    this.store$.dispatch(loadHolydays());
  }

  //Выбор даты
  public selectDate(event:any, timePeriodDate:Date) {

    const target = event.target || event.srcElement || event.currentTarget;
    const dayNum: number = parseInt(target.innerHTML.trim());

    const nTimePeriodDate:Date = new Date(timePeriodDate.getFullYear(), timePeriodDate.getMonth(), dayNum);
    const nSelectedDate:Date = structuredClone(nTimePeriodDate);

    this.store$.dispatch(setTimePeriodDate({date: nTimePeriodDate }));
    this.store$.dispatch(setSelectedDate({date: nSelectedDate }));

  }

  //Перейти к пред месяцу
  public goPrevMonth() {
    this.store$.dispatch(decreaseMonth());
  }

  //Перейти к след месяцу
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
    if (!dayNum) {
      return false;
    }
    const compareDate: Date = new Date(timePeriodDate.getFullYear(), timePeriodDate.getMonth(), dayNum);
    return (compareDate.getTime() === selectedDate.getTime());
  }

  //Проверка на праздничный день
  public isHolyday(dayNum: number, timePeriodDate:Date, holydays: Holyday[]): boolean {
      if (!dayNum || !holydays || !holydays.length) {
        return false;
      }
      const compareDate: Date = new Date(timePeriodDate.getFullYear(), timePeriodDate.getMonth(), dayNum);
      const dates:Date[] = holydays.map((x) => {
        const date:Date = new Date(x.date);
        const milisecondsInMinute = 60*1000;
        return new Date(date.getTime() + date.getTimezoneOffset()*milisecondsInMinute);
      });
      console.log(dates);
      return !!dates.find(x => x.getTime() === compareDate.getTime());
  }

  //Получить заголовок
  public getTooltip(dayNum: number, timePeriodDate:Date, holydays: Holyday[]): Holyday {
    if (!dayNum || !holydays || !holydays.length) {
      return null;
    }
    const compareDate: Date = new Date(timePeriodDate.getFullYear(), timePeriodDate.getMonth(), dayNum);
    holydays = holydays.map((x) => {
      const date:Date = new Date(x.date);
      const milisecondsInMinute = 60*1000;
      return {date: new Date(date.getTime() + date.getTimezoneOffset()*milisecondsInMinute), name: x.name, url: x.url};
    });
    return holydays.find(x => x.date.getTime() === compareDate.getTime());
  }

}
