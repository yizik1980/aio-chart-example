
import { ActionReducerMap,  createReducer, MetaReducer, on } from "@ngrx/store";
import { environment } from "src/environments/environment";
import { LoadingAction, LoadInvoiceSuccessAction, LoadingErrorAction } from "./actions";
import { initialGraphState,graphState, AppState } from "./store";


export const graphReducer = createReducer(
    initialGraphState,
    on(LoadingAction, state => ({ ...state })),
    on(LoadInvoiceSuccessAction, (state, payload) => {
        return {
            ...state,
            graphData: payload.data
        };
    }),
    on(LoadingErrorAction, (state, payload) => ({ ...state, msg: { message: payload.message } }))
)
export const actionReducer:ActionReducerMap<AppState> = {
    graph:graphReducer
};
export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];