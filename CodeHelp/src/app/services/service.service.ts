import { Injectable } from '@angular/core';
import { Questions, question_list } from '../../test_backend/questions';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Messages } from 'src/test_backend/messages';
import { Tags } from 'src/test_backend/tags';
import { Users } from 'src/test_backend/users';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private apiURL = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getTags(): Observable<Tags[]> {
    return this.http.get<Tags[]>(`${this.apiURL}/tags`);
  }

  getTag(id: number): Observable<Tags> {
    return this.http.get<Tags>(`${this.apiURL}/tags/${id}/`);
  }

  getMessages(): Observable<Messages[]> {
    return this.http.get<Messages[]>(`${this.apiURL}/messages`);
  }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.apiURL}/users`);
  }

  getUser(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiURL}/users/${id}/`);
  }
}
