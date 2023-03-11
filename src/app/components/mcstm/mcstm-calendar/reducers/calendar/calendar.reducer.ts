import { Action } from '@ngrx/store';
import { CalendarMode } from '../../enums/calendar-mode';
import { CalendarActions, calendarActionsType, OpenCalendarAction } from './calendar.actions';


export const calendarNode = 'calendar';

export interface CalendarState {
  year: number;
  month: number;
  day: number;
  selectedDate: number;
  isOpen: boolean;
  calendarMode: CalendarMode;
}

const initialState: CalendarState = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  day: new Date().getDay(),
  selectedDate: Date.now(),
  isOpen: false,
  calendarMode: CalendarMode.Days
};

export const calendarReducer = (state = initialState, action: Action) => {
  //export const calendarReducer = (state = initialState, action: OpenCalendarAction) => {

  //alert(111);

 // console.log(action.type);

  switch (action.type) {
    case calendarActionsType.increaseYear:
      return {
        ...state,
        year: state.year + 1
      };
      case calendarActionsType.decreaseYear:
        return {
          ...state,
          year: state.year - 1
        };

        case calendarActionsType.increaseMonth:
      return {
        ...state,
        month: (state.month < 12) ? state.month + 1 : 1
      };
      case calendarActionsType.decreaseMonth:
        return {
          ...state,
          month: (state.month > 1) ? state.month - 1 : 12
        };

        /*
        case calendarActionsType.selectDate:
          return {
            ...state,
            selectedDate: action.payload.selectedDate,
            year: new Date(action.payload.selectedDate).getFullYear,
            month: new Date(action.payload.selectedDate).getMonth,
            date: new Date(action.payload.selectedDate).getDay
          };*/

        case calendarActionsType.openCalendar:

          return {
            ...state,
            isOpen: true
          };

        case calendarActionsType.closeCalendar:
          return {
            ...state,
            isOpen: false
          };

    default:
      return state;

  }
}
