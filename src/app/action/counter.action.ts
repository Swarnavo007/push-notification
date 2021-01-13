import { Action } from '@ngrx/store';

export const UPCOUNTER = 'Upcounter';
export const DOWNCOUNTER = 'Downcounter';
export const RESET = 'Reset';


export class Upcounter implements Action{
    readonly type =UPCOUNTER;
}

export class Downcounter implements Action{
    readonly type = DOWNCOUNTER;
}

export class Reset implements Action{
    readonly type = RESET;
}

export type ALL = Upcounter|Downcounter|Reset;