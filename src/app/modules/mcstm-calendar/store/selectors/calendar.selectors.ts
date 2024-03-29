import { createFeatureSelector, createSelector } from '@ngrx/store';
import { monthNames } from '../../dicts/months.dict';
import { CalendarDayItem } from '../../models/calendar-day-item';
import { Holyday } from '../../models/holyday';
import { calendarNode, CalendarState } from '../reducers/calendar.reducer';

export const selectCalendarFeature = createFeatureSelector<CalendarState>(calendarNode);

export const selectCalendarMode = createSelector(
  selectCalendarFeature,
  (state: CalendarState): number => state.calendarMode
);

export const selectCalendarDate= createSelector(
  selectCalendarFeature,
  (state: CalendarState): Date => state.selectedDate
);


export const selectCalendarIsOpen = createSelector(
  selectCalendarFeature,
  (state: CalendarState): boolean => state.isOpen);


  // Выбранная дата (от нее считаем год и месяц)
  export const selectCalendarTimePeriodDate = createSelector(
    selectCalendarFeature,
    (state: CalendarState): Date => state.timePeriodDate
  );

  export const selectCalendarTimePeriodMonthCountDays = createSelector(
    selectCalendarFeature,
    (state: CalendarState): number => {
      return new Date(state.timePeriodDate.getFullYear(), state.timePeriodDate.getMonth(), 0).getDate();
    }
  );

  export const selectCalendarTimePeriodMonthStartWeekDay = createSelector(
    selectCalendarFeature,
    (state: CalendarState): number => {
      return new Date(state.timePeriodDate.getFullYear(), state.timePeriodDate.getMonth(), 1).getDay();
    }
  );

  export const selectCurrentMonth = createSelector(
    selectCalendarFeature,
    (state: CalendarState): string => {
      return monthNames[state.timePeriodDate.getMonth()];
    }
  );

  export const selectCalendarTimePeriodMonthInfo = createSelector(
    selectCalendarFeature,
    (state: CalendarState): any => {

      const firstDayOfMonth = new Date(state.timePeriodDate.getFullYear(), state.timePeriodDate.getMonth(), 1);
      const startWeekDay: number = firstDayOfMonth.getDay() > 0 ? firstDayOfMonth.getDay() : 7;
      const countMonthDays: number = new Date(state.timePeriodDate.getFullYear(), state.timePeriodDate.getMonth() + 1, 0).getDate();
      const days: CalendarDayItem[] = [];
      const daysFromStartGrid: number = countMonthDays + startWeekDay - 1;


      const gridRowsCount: number = (daysFromStartGrid%7 === 0)
      ? Math.floor(daysFromStartGrid/7)
      : (Math.floor(daysFromStartGrid/7) + 1);

      const gridCellsCount: number = gridRowsCount * 7;

      for (let i = 0; i < gridCellsCount;i++) {

        let year = state.timePeriodDate.getFullYear();
        let month = state.timePeriodDate.getMonth();
        let day = (i + 2) - startWeekDay;

        const item = new CalendarDayItem();
        item.dayGridCellNum = i;
        item.date = (day > 0 && i < (daysFromStartGrid)) ? new Date(year, month, day) : null;
        days.push(item);

      }

      const monthInfo = {startWeekDay, countMonthDays, days};
     // console.log(monthInfo);
      return monthInfo;
    }
  );

  export const selectHolydays = createSelector(
    selectCalendarFeature,
    (state: CalendarState): Holyday[] => state.holydays
  );


