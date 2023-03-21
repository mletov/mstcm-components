import {Action, createAction, createFeatureSelector, createReducer, createSelector, on, props} from '@ngrx/store';
import { CalendarMode } from '../../dicts/calendar-mode.dict';
import { DateHelper } from '../../helpers/date.helper';
import { closeCalendar, decreaseMonth, decreaseYear, increaseMonth, increaseYear, openCalendar, setSelectedDate, setTimePeriodDate } from '../actions/calendar.actions';

export const calendarNode = 'calendar';


const d = new Date();
const currentDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());

export interface CalendarState {
  selectedDate: Date;
  timePeriodDate: Date;
  isOpen: boolean;
  calendarMode: CalendarMode;
}

const initialState: CalendarState = {
  selectedDate: structuredClone(currentDate),
  timePeriodDate: structuredClone(currentDate),
  isOpen: false,
  calendarMode: CalendarMode.Days
};

export const calendarReducer = createReducer(
  initialState,
  on(increaseYear, state => ({
    ...state,
    timePeriodDate: new Date(state.timePeriodDate.setMonth(state.timePeriodDate.getFullYear() + 1))
  })),
  on(decreaseYear, state => ({
    ...state,
    timePeriodDate: new Date(state.timePeriodDate.setMonth(state.timePeriodDate.getFullYear() - 1))
  })),
  on(increaseMonth, state => ({
    ...state,
    timePeriodDate: new Date(state.timePeriodDate.setMonth(state.timePeriodDate.getMonth() + 1))
  })),
  on(decreaseMonth, state => ({
    ...state,
    timePeriodDate: new Date(state.timePeriodDate.setMonth(state.timePeriodDate.getMonth() - 1))
  })),
  on(openCalendar, state => ({
    ...state,
    isOpen: true
  })),
  on(closeCalendar, state => ({
    ...state,
    isOpen: false
  })),
  on(setSelectedDate, (state, { date }) => ({
    ...state,
    timePeriodDate: date
  })),
  on(setTimePeriodDate, (state, { date }) => ({
    ...state,
    selectedDate: date
  })),
);


/*
//OLD STYLE

export const SET_SELECTED_DATE = '[CALENDAR] Select date';
export const ADD_TIME_PERIOD_DATE = '[CALENDAR] Set tiem period date';

class SetSelectedDateAction implements Action {
  readonly type = SET_SELECTED_DATE;

  constructor(public payload: Date) { }
}

class SetTimePeriodDateAction implements Action {
  readonly type = ADD_TIME_PERIOD_DATE;

  constructor(public payload: Date) { }
}

export const calendarReducerSetDate = (state = initialState, action: Action) => {
  switch (action.type) {

    case SET_SELECTED_DATE:
      return {
        ...state,
        timePeriodDate: (action as SetSelectedDateAction).payload
      };

      case ADD_TIME_PERIOD_DATE:
        return {
          ...state,
          selectedDate: (action as SetTimePeriodDateAction).payload
        };
      default:
          return state;
  }
}*/
