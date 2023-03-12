/*import { Action } from '@ngrx/store';

export enum calendarActionsType {
  increaseYear = '[CALENDAR] increase year',
  decreaseYear = '[CALENDAR] decrease year',
  increaseMonth = '[CALENDAR] increase month',
  decreaseMonth = '[CALENDAR] decrease month',
  selectDate = '[CALENDAR] select date',
  setDefaultDate = '[CALENDAR] setDefaultDate',
  openCalendar = '[CALENDAR] open',
  closeCalendar = '[CALENDAR] close'
}

export class CalendarIncreaseYearAction implements Action {
  readonly type = calendarActionsType.increaseYear;
}

export class CalendarDecreaseYearAction implements Action {
  readonly type = calendarActionsType.decreaseYear;
}

export class CalendarIncreaseMonthAction implements Action {
  readonly type = calendarActionsType.increaseMonth;
}

export class CalendarDecreaseMonthAction implements Action {
  readonly type = calendarActionsType.decreaseMonth;
}

export class CalendarSelectDateAction implements Action {
  readonly type = calendarActionsType.selectDate;

  constructor(public payload: {
    selectedDate: number;
  }) {
  }

}

export class CalendarSetDefaultDateAction implements Action {
  readonly type = calendarActionsType.setDefaultDate;

  constructor(public payload: {
    selectedDate: number;
  }) {
  }
}

export class OpenCalendarAction implements Action {
  readonly type = calendarActionsType.openCalendar;
}

export class CloseCalendarAction implements Action {
  readonly type = calendarActionsType.closeCalendar
}

export type CalendarActions = CalendarIncreaseYearAction
  | CalendarDecreaseYearAction
  | CalendarIncreaseMonthAction
  | CalendarDecreaseMonthAction
  | CalendarSelectDateAction
  | CalendarSetDefaultDateAction
  | OpenCalendarAction
  | CloseCalendarAction;

*/
