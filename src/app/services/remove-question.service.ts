import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './baseUrl_here';

@Injectable({
  providedIn: 'root'
})
export class RemoveQuestionService {

  baseURL:string="http://localhost:8091/questions";
  constructor(private httpSer:HttpClient) { }

  //add question
  public removeQuestion(ques:number){
    return this.httpSer.delete(this.baseURL + '/' + ques);
}
}
