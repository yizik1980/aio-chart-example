import { createAction, props } from "@ngrx/store";
import { invoice } from "../model/invoice";


export enum AppActions {
    LOADING = '[App] Loading',
    SUCCESS = '[App] Success',
    FAIL = '[App] Fail'
};

const LoadingAction = createAction(AppActions.LOADING,props<{msg:string}>());
const LoadInvoiceSuccessAction = createAction(AppActions.SUCCESS, props<{ data: invoice[] }>());
const LoadingErrorAction = createAction(AppActions.FAIL, props<{ message: string }>());

export {
    LoadingAction,
    LoadInvoiceSuccessAction,
    LoadingErrorAction
};