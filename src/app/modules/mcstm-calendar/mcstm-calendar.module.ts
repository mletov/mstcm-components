import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { metaReducers, reducers } from './store/reducers';
import { McstmCalendarComponent } from './mcstm-calendar-component/mcstm-calendar.component';
import { AppEffects } from './store/effects/app.effects';
import { environment } from './environments/environment';
import { McstmGridComponent } from '../mcstm-grid/mcstm-grid/mcstm-grid.component';

import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    McstmGridComponent,
    McstmCalendarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([AppEffects])
  ],
  exports: [
    McstmGridComponent,
    McstmCalendarComponent
  ],
  providers: [],
//  bootstrap: [AppComponent]
})
export class McstmCalendarModule {
}
