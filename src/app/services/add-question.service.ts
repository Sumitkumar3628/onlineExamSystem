import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './baseUrl_here';

@Injectable({
  providedIn: 'root'
})
export class AddQuestionService {

  constructor(private httpSer:HttpClient) { }

  //add question
  public addQuestion(ques:any){
    return this.httpSer.post(`${baseUrl}/questions/`,ques);
}

}
