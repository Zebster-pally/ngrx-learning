import { initialUserState, IUserState } from "./user.state";

export interface IAppState {
    data: IUserState
}

export const initialAppState: IAppState = {
    data: initialUserState
}

export function getInitialState(): IAppState {
    return initialAppState;
}
