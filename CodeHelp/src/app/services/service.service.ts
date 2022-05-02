import { Injectable } from '@angular/core';
import { Questions, question_list } from '../../test_backend/questions';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Messages } from 'src/test_backend/messages';
import { Tags } from 'src/test_backend/tags';
import { Users } from 'src/test_backend/users';
import { AuthToken } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  //private apiURL = 'http://localhost:5000';
  private base_url='http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getTags(): Observable<Tags[]> {
    return this.http.get<Tags[]>(`${this.base_url}/tags`);
  }

  getTag(id: number): Observable<Tags> {
    return this.http.get<Tags>(`${this.base_url}/tags/${id}/`);
  }

  getMessages(id:number): Observable<Messages[]> {
    return this.http.get<Messages[]>(`${this.base_url}/questions/${id}/messages`);
  }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.base_url}/users`);
  }

  getUser(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.base_url}/users/${id}/`);
  }

  login(email:string,password:string):Observable<AuthToken>{
    return this.http.post<AuthToken>(`${this.base_url}/login/`,{
      email,password
    })
  }

  changePassword(id:number,old_password:string,password:string,password2:string):Observable<null>{
    return this.http.put<any>(`${this.base_url}/users/${id}/change_password/`,{old_password,password,password2});
  }
}
