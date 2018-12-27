import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserListModel } from 'src/app/models/UserListModel';
import { UserModel } from 'src/app/models/UserModel';
import { HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';

const APIEndpoint = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USERS = APIEndpoint + '/customers';
  USER_DETAIL = APIEndpoint + '/user/detail?id=';
  USER_BY_ID = APIEndpoint + '/user?id=';
  USER = APIEndpoint + '/user';
  USER_REMOVE = APIEndpoint + '/user?id=';

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  // Create user
  createUser(user: UserModel) {
    console.log('Vytvarim zaznam do DB z modelu: ' + JSON.stringify(user));
    return this.http.post(this.USER, user);
  }

  // GET User Detail with all cars and repairs
  getUserDetail(id): Observable<UserModel> {
    console.log('User Detail ID called from API: ' + this.USER_DETAIL + id);
    return this.http.get<UserModel>(this.USER_DETAIL + id);
  }

  // GET user by ID
  getUserById(id): Observable<UserModel> {
    console.log('User by ID called from API: ' + this.USER_BY_ID + id);
    return this.http.get<UserModel>(this.USER_BY_ID + id);
  }

  // GET user list for easy FE navigation and looking for users
  getUserList(): Observable<Array<UserListModel>> {
    console.log('UserList called from API');
    return this.http.get<Array<UserListModel>>(this.USERS);
  }

  // Remove user from DB
  removeUser(id): Observable<UserModel[]> {
    console.log('Removing user: ' + this.USER_REMOVE + id);
    return this.http.delete<UserModel[]>(this.USER_REMOVE + id);
  }

  // Update user in DB
  updateCar(user: UserModel) {
    console.log('Updating user from Service to DB, ID: ' + this.USER + ' data:' + JSON.stringify(user));
    return this.http.put(this.USER, user);
  }
}
