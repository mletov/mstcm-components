import { createAction, props } from "@ngrx/store";
import { CLOSE_CALENDAR, DECREASE_MONTH, DECREASE_YEAR, HOLYDAYS_LOADED_ERROR, HOLYDAYS_LOADED_SUCCESS, INCREASE_MONTH, INCREASE_YEAR, LOAD_HOLYDAYS, OPEN_CALENDAR, SELECT_DATE, SET_PERIOD_TIME_DATE } from "../../dicts/action-types";
import { Holyday } from "../../models/holyday";

//Календарь
export const increaseYear = createAction(INCREASE_YEAR);
export const decreaseYear = createAction(DECREASE_YEAR);
export const increaseMonth = createAction(INCREASE_MONTH);
export const decreaseMonth = createAction(DECREASE_MONTH);
export const openCalendar = createAction(OPEN_CALENDAR);
export const closeCalendar = createAction(CLOSE_CALENDAR);
export const setSelectedDate = createAction(SELECT_DATE, props<{date: Date; }>());
export const setTimePeriodDate = createAction(SET_PERIOD_TIME_DATE, props<{date: Date; }>());

//Праздники
export const loadHolydays = createAction(LOAD_HOLYDAYS);
export const holydaysLoadedSuccess = createAction(HOLYDAYS_LOADED_SUCCESS, props<{holydays: Holyday[]; }>());
export const holydaysLoadedError = createAction(HOLYDAYS_LOADED_ERROR);
