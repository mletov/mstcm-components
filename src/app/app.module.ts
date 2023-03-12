


import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "./app-routing.module";
import { McstmCalendarModule } from "./modules/mcstm-calendar/mcstm-calendar.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
	  McstmCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


