import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { IUserState } from "../state/user.state"

const selectUsers = (state: IAppState) => state.data;

export const selectUserList = createSelector(
    selectUsers,
    (state: IUserState) => state.users
);
