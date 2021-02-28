import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from "rxjs";

import { switchMap } from 'rxjs/operators';

import { UsersService } from '../../services/users.service';
import { EUserActions, GetUsers, GetUsersSuccess } from "../actions/users.actions";
import { IUser } from "../models/user.model";

@Injectable()
export class UserEffects {
    @Effect()
    getUsers$ = this._actions$.pipe(
        ofType<GetUsers>(EUserActions.GetUsers),
        switchMap(() => this._userService.get()),
        switchMap((userHttp: IUser[]) => {
            return of(new GetUsersSuccess(userHttp))
        }));

    constructor(
        private _userService: UsersService,
        private _actions$: Actions
    ) { }
}
