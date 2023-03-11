import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { McstmCalendarComponent } from './components/mcstm/mcstm-calendar/mcstm-calendar.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {calendarReducer} from './components/mcstm/mcstm-calendar/reducers/calendar/calendar.reducer'
import { AppEffects } from './components/mcstm/mcstm-calendar/app.effects';
import { metaReducers, reducers } from './components/mcstm/mcstm-calendar/reducers';
import { environment } from './components/mcstm/mcstm-calendar/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    McstmCalendarComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

/*
@NgModule({
  declarations: [
    AppComponent,
    McstmCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot(),
   // EffectsModule.forRoot([]),
   // StoreRouterConnectingModule.forRoot(),
   // StoreModule.provideStore(calendarReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/
