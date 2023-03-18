import {createAction, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import { CalendarMode } from '../../enums/calendar-mode';

export const calendarNode = 'calendar';

export const increaseYear = createAction('[CALENDAR] increase year');
export const decreaseYear = createAction('[CALENDAR] decrease year');
export const increaseMonth = createAction('[CALENDAR] increase month');
export const decreaseMonth = createAction('[CALENDAR] decrease month');
export const selectDate = createAction('[CALENDAR] select date');
export const setDefaultDate = createAction('[CALENDAR] setDefaultDate');
export const openCalendar = createAction('[CALENDAR] open');
export const closeCalendar = createAction('[CALENDAR] close');

const d = new Date();
//const currentDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
const currentDate = new Date(2020, 2, 1);

export interface CalendarState {
  selectedDate: Date;
  timePeriodDate: Date;
  isOpen: boolean;
  calendarMode: CalendarMode;
}

const initialState: CalendarState = {
  selectedDate: currentDate,
  timePeriodDate: currentDate,
  isOpen: false,
  calendarMode: CalendarMode.Days
};


export const calendarReducer = createReducer(
  initialState,
  on(increaseYear, state => ({
    ...state,
   // year: state.year + 1
  })),
  on(decreaseYear, state => ({
    ...state,
   // year: state.year + 1
  })),
  on(increaseMonth, state => ({
    ...state,
    //year: state.year + 1
  })),
  on(decreaseMonth, state => ({
    ...state,
   // year: state.year + 1
  })),
  on(selectDate, state => ({
    ...state,
    //year: state.year + 1
  })),
  on(setDefaultDate, state => ({
    ...state,
   // year: state.year + 1
  })),
  on(openCalendar, state => ({
    ...state,
    isOpen: true
  })),
  on(closeCalendar, state => ({
    ...state,
    isOpen: false
  })),
);

/*
//export const calendarReducer = (state = initialState, action: Action) => {
  export const calendarReducer = (state = initialState, action: OpenCalendarAction) => {

  //alert(111);

 // console.log(action.type);

 return state;

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


        //case calendarActionsType.selectDate:
        //  return {
        //    ...state,
        //    selectedDate: action.payload.selectedDate,
         //   year: new Date(action.payload.selectedDate).getFullYear,
         //   month: new Date(action.payload.selectedDate).getMonth,
         //   date: new Date(action.payload.selectedDate).getDay
         // };

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
}*/
