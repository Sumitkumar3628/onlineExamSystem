import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { question } from 'src/app/question';
import { QuestionsService } from 'src/app/services/questions.service';
import { SendCatIdService } from 'src/app/services/send-cat-id.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  constructor(private quesSer:QuestionsService,private catIdSer:SendCatIdService,private route:ActivatedRoute) { }

  level:number=1;
  cid:any;
  qid:number;
  ngOnInit(): void {
    //getting qid from senCatIdService
    //let cid = this.route.snapshot.params["catId"];
    this.cid = sessionStorage.getItem("catId");
    console.log(typeof(this.cid));
    console.log(this.cid)
    this.getqid();
    this.catIdSer.cid$.subscribe((CategoryId)=>this.cid=CategoryId)
    console.log(this.cid)
    this.quesSer.getQuestions(this.qid).subscribe((data)=>{
      this.qlist=data;
      console.log(this.qlist);
    })
    
    
  }

  qlist:question[]=[];
  
  // public loadQuestion(){
  //     this.quesSer.getQuestions(24).subscribe((data)=>{
  //       this.qlist=data;
  //       console.log(this.qlist);
  //     })
  // }

  public getqid(){

    if(this.cid=="23" && this.level==1){
        this.qid=24;
    }
    if(this.cid=="26" && this.level==1){
      this.qid=31;
    }
    if(this.cid=="27" && this.level==1){
      this.qid=34;
    }
    if(this.cid=="28" && this.level==1){
      this.qid=37;
    }

    
  }

}
