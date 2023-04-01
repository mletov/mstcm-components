import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { metaReducers, reducers } from './store/reducers';
import { environment } from './environments/environment';
import { McstmGridComponent } from '../mcstm-grid/mcstm-grid/mcstm-grid.component';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Holydaysffects } from './store/effects/holydays.effects';
import { TooltipDirective } from './directives/tooltip.directive';
import { McstmCalendarDayModule } from './components/mcstm-calendar-component/mstcm-calendar-day/mcstm-calendar-day.module';
import { McstmCalendarMonthModule } from './components/mcstm-calendar-component/mcstm-calendar-month/mcstm-calendar-month.module';
import { McstmCalendarYearModule } from './components/mcstm-calendar-component/mcstm-calendar-year/mcstm-calendar-year.module';
import { McstmCalendarComponent } from './components/mcstm-calendar-component/mcstm-calendar.component';
import { TooltipComponent } from './components/tooltip-component/tooltip/tooltip.component';


@NgModule({
  declarations: [
    McstmCalendarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([Holydaysffects]),
    //EffectsModule.forFeature([AppEffects]),
    HttpClientModule,
    McstmCalendarDayModule,
    McstmCalendarMonthModule,
    McstmCalendarYearModule
  ],
  exports: [
    McstmCalendarComponent
  ],
  providers: [],
//  bootstrap: [AppComponent]
})
export class McstmCalendarModule {
}
