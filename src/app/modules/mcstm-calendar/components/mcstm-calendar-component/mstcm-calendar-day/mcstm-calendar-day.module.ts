import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McstmCalendarDayComponent } from './mcstm-calendar-day-component/mcstm-calendar-day.component';
import { TooltipDirective } from '../../../directives/tooltip.directive';
import { TooltipModule } from '../../tooltip-component/tooltip.module';

@NgModule({
  declarations: [
    McstmCalendarDayComponent
  ],
  exports: [
    McstmCalendarDayComponent
  ],
  imports: [
    CommonModule,
    TooltipModule
  ]
})
export class McstmCalendarDayModule { }
