import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { HOLYDAYS_LOADED_SUCCESS, LOAD_HOLYDAYS } from '../../dicts/action-types';
import { HolydaysService } from '../../services/holydays.service';


@Injectable()
export class Holydaysffects {

  loadHolydays$ = createEffect(() => this.actions$.pipe(
    ofType(LOAD_HOLYDAYS),
    exhaustMap(() => this.holydaysService.getJSON()
      .pipe(
        map(holydays => ({ type: HOLYDAYS_LOADED_SUCCESS, holydays: holydays })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private holydaysService: HolydaysService
  ) {}
}
