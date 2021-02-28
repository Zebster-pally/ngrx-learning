import { Component, OnInit } from '@angular/core';
import { IUser } from '../store/models/user.model';

import { select, Store } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { selectUserList } from '../store/selectors/user.selectors';
import { GetUsers } from '../store/actions/users.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user: IUser

  users = this.store.pipe(select(selectUserList))

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new GetUsers());
  }

}
