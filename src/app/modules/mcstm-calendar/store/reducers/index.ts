
import {
  ActionReducerMap, MetaReducer, Action
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { calendarNode, calendarReducer, CalendarState } from './calendar.reducer';



//import { OpenCalendarAction } from './calendar/calendar.actions';

export interface State {
  [calendarNode]: CalendarState;
}

export const reducers: ActionReducerMap<State> = {
  [calendarNode]: calendarReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

