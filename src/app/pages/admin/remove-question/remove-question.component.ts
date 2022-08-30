import { Component, OnInit } from '@angular/core';
import { RemoveQuestionService } from 'src/app/services/remove-question.service';

@Component({
  selector: 'app-remove-question',
  templateUrl: './remove-question.component.html',
  styleUrls: ['./remove-question.component.css']
})
export class RemoveQuestionComponent implements OnInit { 

  constructor(private remQuesSer:RemoveQuestionService) { }

  ngOnInit(): void {
  }

  quesNo:number;
  removeQuesNo(val: any){
    let result = confirm('Do you want to delete the Question?')

      if(result){

        console.log(val);
        this.quesNo=val;
        this.remQuesSer.removeQuestion(this.quesNo).subscribe((data)=>{
          console.log(data);
          alert("Question removed successfully!!");
        },(error)=>{
          console.log(error);
          alert("Something went wrong")
        })

      }
   
  }

}
