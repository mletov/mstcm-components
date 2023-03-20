import { createAction, props } from "@ngrx/store";

export const increaseYear = createAction('[CALENDAR] increase year');
export const decreaseYear = createAction('[CALENDAR] decrease year');
export const increaseMonth = createAction('[CALENDAR] increase month');
export const decreaseMonth = createAction('[CALENDAR] decrease month');
export const openCalendar = createAction('[CALENDAR] open');
export const closeCalendar = createAction('[CALENDAR] close');
export const setSelectedDate = createAction('[CALENDAR] Select date', props<{date: Date; }>());
export const setTimePeriodDate = createAction('[CALENDAR] Set time period date', props<{date: Date; }>());

