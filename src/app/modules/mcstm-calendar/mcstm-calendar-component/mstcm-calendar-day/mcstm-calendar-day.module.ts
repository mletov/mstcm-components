import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McstmCalendarDayComponent } from './mcstm-calendar-day-component/mcstm-calendar-day.component';




@NgModule({
  declarations: [
    McstmCalendarDayComponent
  ],
  exports: [
    McstmCalendarDayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class McstmCalendarDayModule { }
