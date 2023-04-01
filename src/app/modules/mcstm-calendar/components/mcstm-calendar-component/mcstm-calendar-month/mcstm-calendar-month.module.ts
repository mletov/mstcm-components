import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McstmCalendarMonthComponent } from './mcstm-calendar-month-component/mcstm-calendar-month.component';


@NgModule({
  declarations: [
    McstmCalendarMonthComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    McstmCalendarMonthComponent
  ]
})
export class McstmCalendarMonthModule { }
