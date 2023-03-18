import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef, ViewChild } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { CalendarMode } from '../enums/calendar-mode';
import { CalendarState, closeCalendar, openCalendar } from '../store/reducers/calendar.reducer';
import { selectCalendarDate, selectCalendarIsOpen, selectCalendarMode } from '../store/selectors/calendar.selectors';



@Component({
  selector: 'app-mcstm-calendar',
  templateUrl: './mcstm-calendar.component.html',
  styleUrls: ['./mcstm-calendar.component.css']
})
export class McstmCalendarComponent implements OnInit {

  //Режимы календаря
  public CalendarMode = CalendarMode;

  //Открыт/закрыт
  public isOpened$: Observable<boolean> = this.store$.pipe(select(selectCalendarIsOpen));

  //Получить из хранилища
  public calendarMode$: Observable<CalendarMode> = this.store$.pipe(select(selectCalendarMode));

  //Выбранная дата
  @Input()
  public selectedDate$ : Observable<Date> = this.store$.pipe(select(selectCalendarDate));

  //Поле ввода даты
  @ViewChild("calendarInput")
  calendarInput: ElementRef|undefined;

  //Поле ввода даты
  @ViewChild("calendarBlock")
  calendarBlock: ElementRef|undefined;


  @Output()
  public onOpen = new EventEmitter();

  @Output()
  public onClose = new EventEmitter();

  //Событие изменения даты
  @Output()
  public onDateChange = new EventEmitter<Date>();


  calendarOpen() {
      this.store$.dispatch(openCalendar());
      //this.onOpen.emit();
  }

  calendarClose() {
    this.store$.dispatch(closeCalendar());
    this.onClose.emit();
  }

  dateChange() {
     // this.store$.dispatch(new CalendarSelectDateAction({selectedDate: 123}));
      this.onDateChange.emit();
  }

  toggleCalendar() {
    /*
    if (this.isOpened) {
      close();
    }
    else {
      this.open();
    }*/
  }



  @HostListener('document:click', ['$event'])
  clickout(event: any) {

    if(this.eRef.nativeElement.contains(event.target)) {

      this.calendarOpen();
      /*
      if (event.target.classList.contains("day")) {
        this.calendarOpen();
      }*/
    } else {
      this.calendarClose();
      this.dateChange();
    }
  }

  constructor(private eRef: ElementRef, private store$:Store<CalendarState>) {
    //console.log(store$);

   // this.isOpened$ = this.store$.pipe(select(selectCalendarIsOpen));
    //this.isOpened$ = store$.select(fromRoot.getSelectedFilm);

  }

  ngOnInit(): void {
  }



}


  /*
      onSelect	value: Selected value	Callback to invoke when a date is selected. Note that this event is not called when the value is entered from the input manually.
      onBlur	event: Blur event	Callback to invoke on blur of input field.
      onFocus	event: Focus event	Callback to invoke on focus of input field.
      onClose	event: Close event	Callback to invoke when datepicker panel is closed.
      onShow	event: Animation event	Callback to invoke when datepicker panel is visible.
      onClickOutside	event: Click event	Callback to invoke when click outside of datepicker panel.
      onInput	event: Input event	Callback to invoke when input field is being typed.
      onTodayClick	event: Click event	Callback to invoke when today button is clicked.
      onClearClick	event: Click event	Callback to invoke when clear button is clicked.
      onMonthChange	event.month: New month
      event.year: New year	Callback to invoke when a month is changed using the navigators.
      onYearChange	event.month: New month
      event.year: New year	Callback to invoke when a year is changed using the navigators.
      onClear	-	Callback to invoke when input field is cleared.
  */
