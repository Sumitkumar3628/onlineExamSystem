import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { question } from 'src/app/question';
import { AddQuestionService } from 'src/app/services/add-question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  constructor(private quesSer:AddQuestionService,private snack:MatSnackBar) { }

  category:number;
  level:number;

  public ques={
  content:"",
	image:"",
	option1:"",
	option2:"",
	option3:"",
	option4:"",
	answer:"",
  quiz_qid:0

  };

  ngOnInit(): void {
  }


  decideQuid(){
    if(this.category==23){
      if(this.level==1){
        this.ques.quiz_qid = 24;
      }else if(this.level==2){
        this.ques.quiz_qid=29;
      }else{
        this.ques.quiz_qid=30;
      }
    }

    else if(this.category==26){
      if(this.level==1){
        this.ques.quiz_qid=31;
      }else if(this.level==2){
        this.ques.quiz_qid=32;
      }else{
        this.ques.quiz_qid=33;
      }
    }

    else if(this.category==27){
      if(this.level==1){
        this.ques.quiz_qid=34;
      }else if(this.level==2){
        this.ques.quiz_qid=35;
      }else{
        this.ques.quiz_qid=36;
      }
    }

    else if(this.category==28){
      if(this.level==1){
        this.ques.quiz_qid=37;
      }else if(this.level==2){
        this.ques.quiz_qid=38;
      }else{
        this.ques.quiz_qid=39;
      }
    }

   }

   submitQuestion(){
    this.decideQuid();
    console.log(this.ques.quiz_qid)
    this.quesSer.addQuestion(this.ques).subscribe((data)=>{
      console.log(data);
        alert('Question submitted successfully');
    },
    (error) =>{
      //error
      console.log(error);
      this.snack.open("Something went wrong",'',{
        duration:2000
      })
      //alert("Something went wrong");
    })
    console.log(this.ques.quiz_qid);
   }

   
   

}
