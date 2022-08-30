import { Component, OnInit } from '@angular/core';
import { question } from 'src/app/question';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  constructor(private quesSer:QuestionsService) { }

  ngOnInit(): void {

    this.quesSer.getQuestions(24).subscribe((data)=>{
      this.qlist=data;
      console.log(this.qlist);
    })
    
  }

  qlist:question[]=[];
  
  public loadQuestion(){
      this.quesSer.getQuestions(24).subscribe((data)=>{
        this.qlist=data;
        console.log(this.qlist);
      })

  }

}
