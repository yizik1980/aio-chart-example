import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { dataEntityService } from '../services/dataEntity.service';
import { LoadingAction, LoadingErrorAction, LoadInvoiceSuccessAction } from './actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class EffectService {
  constructor(private dataService: dataEntityService, private effect: Actions) {
  }
  @Effect()
  $effecrLoad = this.effect.pipe(ofType(LoadingAction))
      .pipe(switchMap((actionResult: any) => {
        return this.dataService.getData().pipe(
          map((data) => {         
          return LoadInvoiceSuccessAction({ data });
        }),catchError((err: any) => {
          return of(LoadingErrorAction({ message: err.message }))
        }));
      }));
}


