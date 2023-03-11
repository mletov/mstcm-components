/*
Берет в себя экшен и возвращает обратно экшен и отдает в Reducer. Слушает все экшены в системе. Обращается к базе, внешним сервисам и т д
*/


import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { calendarActionsType,
  CalendarIncreaseYearAction,
   CalendarDecreaseYearAction,
   CalendarIncreaseMonthAction,
   CalendarDecreaseMonthAction,
   CalendarSelectDateAction,
   CalendarSetDefaultDateAction,
   OpenCalendarAction,
   CloseCalendarAction}
from './reducers/calendar/calendar.actions';

@Injectable()
export class AppEffects {

  constructor(private actions$: Actions) {}


  changeOpenState$ = createEffect(() => {


    return this.actions$.pipe(
      ofType(calendarActionsType.openCalendar, calendarActionsType.closeCalendar),
      map(() => {
        return new OpenCalendarAction();
      })
    );


  });

}

