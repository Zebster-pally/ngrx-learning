import { IUser } from '../models/user.model';

export interface IUserState {
    users: IUser[]
}

export const initialUserState: IUserState = {
    users: null
}
