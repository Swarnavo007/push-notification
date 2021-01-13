
import * as PostCounter from '../action/counter.action';
import {Post} from '../model/counter.model';

export type Action =PostCounter.ALL;

const defaultState:Post={
    counter:0
}

const newState=(state,newData)=>{
    return Object.assign({},state,newData);
}

export function counterReducer(state:Post=defaultState,action:Action){

    switch(action.type){
        case PostCounter.UPCOUNTER:
            return newState(state,{counter:state.counter+1});
        case PostCounter.DOWNCOUNTER:
            return newState(state,{counter:state.counter-1});
        case PostCounter.RESET:
            return defaultState;
        default:
            return state;
    }
}