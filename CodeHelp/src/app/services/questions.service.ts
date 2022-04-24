import { Injectable } from '@angular/core';
import { Questions, question_list } from '../../test_backend/questions';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private apiURL = 'http://localhost:5000/questions';

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<Questions[]> {
    return this.http.get<Questions[]>(this.apiURL);
  }

  getQuestion(id: number): Observable<Questions> {
    return this.http.get<Questions>(`${this.apiURL}/${id}/`);
  }

  deleteQuestion(question: Questions): Observable<any> {
    return this.http.delete(`${this.apiURL}/${question.id}`);
  }

  updateQuestion(question: Questions): Observable<Questions> {
    return this.http.put<Questions>(`${this.apiURL}/${question.id}`, question);
  }

  addQuestion(question: Questions): Observable<Questions> {
    return this.http.post<Questions>(`${this.apiURL}`, question);
  }
}
