import { createFeatureSelector, createSelector } from '@ngrx/store';
import { calendarNode, CalendarState } from './calendar.reducer';

export const selectCalendarFeature = createFeatureSelector<CalendarState>(calendarNode);

export const selectCalendarMode = createSelector(
  selectCalendarFeature,
  (state: CalendarState): number => state.calendarMode
);

export const selectCalendarDay= createSelector(
  selectCalendarFeature,
  (state: CalendarState): number => state.day
);


export const selectCalendarYear = createSelector(
  selectCalendarFeature,
  (state: CalendarState): number => state.year
);


export const selectCalendarMonth = createSelector(
  selectCalendarFeature,
  (state: CalendarState): number => state.month
);


export const selectCalendarDate= createSelector(
  selectCalendarFeature,
  (state: CalendarState): number => state.selectedDate
);


export const selectCalendarIsOpen = createSelector(
  selectCalendarFeature,
 // (state: CalendarState): boolean => state.isOpen
 function(state: CalendarState): boolean {
  console.log(state)
    return state.isOpen;
 });


