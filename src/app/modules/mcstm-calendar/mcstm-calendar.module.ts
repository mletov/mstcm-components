import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { metaReducers, reducers } from './store/reducers';
import { McstmCalendarComponent } from './mcstm-calendar-component/mcstm-calendar.component';
import { environment } from './environments/environment';
import { McstmGridComponent } from '../mcstm-grid/mcstm-grid/mcstm-grid.component';

import { CommonModule } from '@angular/common';
import { McstmCalendarDayModule } from './mcstm-calendar-component/mstcm-calendar-day/mcstm-calendar-day.module';
import { McstmCalendarMonthModule } from './mcstm-calendar-component/mcstm-calendar-month/mcstm-calendar-month.module';
import { McstmCalendarYearModule } from './mcstm-calendar-component/mcstm-calendar-year/mcstm-calendar-year.module';
import { HttpClientModule } from '@angular/common/http';
import { Holydaysffects } from './store/effects/holydays.effects';


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
