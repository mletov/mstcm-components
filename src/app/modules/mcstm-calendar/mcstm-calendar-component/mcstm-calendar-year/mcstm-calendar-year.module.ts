import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McstmCalendarYearComponent } from './mcstm-calendar-year-component/mcstm-calendar-year.component';



@NgModule({
  declarations: [
    McstmCalendarYearComponent
  ],
  exports: [
    McstmCalendarYearComponent
  ],
  imports: [
    CommonModule
  ]
})
export class McstmCalendarYearModule { }
