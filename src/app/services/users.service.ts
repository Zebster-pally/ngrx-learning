import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../store/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/posts';

  get(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url)
  }
}
