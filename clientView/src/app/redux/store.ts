import { invoice } from "../model/invoice";
export interface AppState {
  graph:any
}
export interface graphState {
    graphData:Array<invoice>,
    msg: { message: string };
  }

  
  export const initialGraphState: graphState = {
    graphData: new Array<invoice>(),
    msg:{ message:''}
  };
