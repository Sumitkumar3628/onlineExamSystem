import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { question } from 'src/app/question';
import { questions } from 'src/app/questions';
import { report } from 'src/app/report';
import { LoginService } from 'src/app/services/login.service';
import { QuestionsService } from 'src/app/services/questions.service';
import { ReportService } from 'src/app/services/report.service';
import { SendCatIdService } from 'src/app/services/send-cat-id.service';
import { user } from 'src/app/user';
import Swal from 'sweetalert2'
import { ReportComponent } from './report/report.component';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  constructor(private quesSer:QuestionsService,private catIdSer:SendCatIdService,private route:ActivatedRoute,private router:Router,private repSer:ReportService,private logSer:LoginService) { }

  level:number=1;
  cid:any;
  qid:number;
  userid:number;
  timer:any;

  category:string;
  marksGot=0;
  correctAnswers=0;
  attempted=0;
  radioSelected:number;
  userSelect:questions[]=[]; 
  answer:string[]=[];


  u:any;
  username:any;
  userArray=Array();
  userArr:string[]=[];

  ngOnInit(): void {
    //getting qid from senCatIdService
    //let cid = this.route.snapshot.params["catId"];
    this.cid = sessionStorage.getItem("catId");
    //console.log(typeof(this.cid));
    //console.log(this.cid)
    this.getqid();
    this.catIdSer.cid$.subscribe((CategoryId)=>this.cid=CategoryId)
    //console.log(this.cid)
    this.quesSer.getQuestions(this.qid).subscribe((data)=>{
      this.qlist=data;
      //console.log(this.qlist);
      //for timer
      this.timer = this.qlist.length*1*60;
      this.startTimer()
    }) 

    console.log("From load-quizComponent : "+localStorage.getItem('user'));
    
    
    //this.userArr = localStorage.getItem('user');
    console.log("data type : "+(localStorage.getItem('user')?.split(',')));

    this.u = localStorage.getItem('user');
    console.log(this.u);

    console.log("UserName in load quiz: "+localStorage.getItem('username'));
    this.username = localStorage.getItem('username');
    console.log("user name in any username : "+this.username);
    //this.userid = localStorage.getItem('uid');
    console.log("user Id in uid : "+localStorage.getItem('uid'));
    //console.log(typeof());


    //console.log("data type of user from local storage: "+typeof(localStorage.getItem('user')));
    //console.log("from load quiz : "+this.u.username);
    this.username=this.u;
    console.log("after storing in string :"+JSON.stringify(this.userAnswer));


    this.username = localStorage.getItem('uname');

  }

  qlist:question[]=[];
  userAnswer:string[]=[];

  

  
  // public loadQuestion(){
  //     this.quesSer.getQuestions(24).subscribe((data)=>{
  //       this.qlist=data;
  //       console.log(this.qlist);
  //     })
  // }



  public getqid(){

    if(this.cid=="23" && this.level==1){
        this.qid=24;
        this.report.category = "JAVA";
    }
    if(this.cid=="26" && this.level==1){
      this.qid=31;
      this.report.category = "SQL";
    }
    if(this.cid=="27" && this.level==1){
      this.qid=34;
      this.report.category = "Python";
    }
    if(this.cid=="28" && this.level==1){
      this.qid=37;
      this.report.category = "C";
    }

    //this.qlist.forEach((q)=>{
      //console.log('from qlist for each');
      //console.log(q);
      //q['givenAnswer']='';
      
    //});
  }

  onSelect(){

  }

  public report={
      name:"",
	    score:0,
	    result:"",
      "user":{
        "id":0
      },
      category:""
  }

  percentage:number=0;
  totalMarks:number=0;
  marks:number=0;
  rep:report;
  res:string;

  submitQuiz(){
    console.log(this.userAnswer);
    for (let i = 0; i < this.userAnswer.length; i++) {
      this.totalMarks = this.totalMarks+10;
      if(this.userAnswer[i]==this.qlist[i].answer){
          this.marks = this.marks + 10;
      }
    }
    this.percentage = (this.marks/this.totalMarks)*100;
    console.log(this.marks);
    console.log(this.percentage);
    sessionStorage.setItem('percent','100');
    console.log(sessionStorage.getItem('percent'));

    //this.repSer.addReport();

    if(this.percentage>=65){
      this.res = "pass";
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Congratulations! You scored '+this.percentage.toFixed(2)+'%',
        showConfirmButton: true,
      })
    }else{
      this.res = "fail";
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Quiz not cleared',
        text: 'You scored '+this.percentage.toFixed(2)+'%',
        showConfirmButton: true,
        
      })
    }
    this.report.name = this.username;
    this.report.score = this.marks;
    this.report.result = this.res;
    this.report.user.id = Number(localStorage.getItem('uid'));
    

    console.log("REPORT CARD : "+this.report.name);

    this.repSer.addReport(this.report).subscribe((data)=>{
        alert("Report submitted successfully.")
    },
    (error)=>{
      alert("Something Went Wrong!");
    })

    this.router.navigate(['user-dashboard']); 
    

  }

  startTimer(){
    let t:any = window.setInterval(()=>{
      //code
      if(this.timer<=0){
        this.submitQuiz();
        clearInterval(t);
      }else{
        this.timer--;
      }
    },500)
  }

  getFormatedTime(){
    let mm = Math.floor(this.timer/60);
    let ss = this.timer - mm*60;
    return `${mm} min : ${ss} sec`; 
  }
}
