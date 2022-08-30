import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { question } from '../question';
import baseUrl from './baseUrl_here';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  url:string="http://localhost:8091/";

  constructor(private httpSer:HttpClient) { }
  quesList:question[]=[];

  public getQuestions(qid:any){
    return this.httpSer.get<question[]>(this.url+'questions/quiz/'+qid);
  }
}
