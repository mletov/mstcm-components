/*
Берет в себя экшен и возвращает обратно экшен и отдает в Reducer. Слушает все экшены в системе. Обращается к базе, внешним сервисам и т д
*/
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { calendarActionsType } from './reducers/calendar/calendar.actions';

@Injectable()
export class AppEffects {

  constructor(private actions$: Actions) {}

  /*
  //Имя не имеет значения
  updatedAt$ = createEffect(() => {

    return this.actions$.pipe(
      ofType(countActionsType.increase, countActionsType.decrease, countActionsType.clear),
      map(() => {

        return new CountUpdatedAtAction({
          updatedAt: Date.now()
        });
      })
    );

  });*/

}
