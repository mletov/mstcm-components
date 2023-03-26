import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McstmCalendarDayComponent } from './mcstm-calendar-day-component/mcstm-calendar-day.component';
import { TooltipDirective } from '../../directives/tooltip.directive';

@NgModule({
  declarations: [
    McstmCalendarDayComponent,
    TooltipDirective
  ],
  exports: [
    McstmCalendarDayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class McstmCalendarDayModule { }
