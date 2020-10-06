import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Question } from '../class/question';
import { QuestionService } from '../service/questionService';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-getquestion-by-id',
  templateUrl: './getquestion-by-id.component.html',
  styleUrls: ['./getquestion-by-id.component.css']
})
export class GetquestionByIdComponent {
  question:Question;

  constructor(private route:ActivatedRoute,private questionService:QuestionService) { 
    let observable =route.paramMap;//param map is the property in activated route
   observable.subscribe((params:ParamMap)=>{
    let idVal:string =params.get("id");
    let idNum:number=Number(idVal);//converting string to number
    console.log("id available is "+idNum);
    this.getQuestion(idNum);
   })
   }

id:number;
name:String="pradeep";

   getQuestion(id:number){
    let observable:Observable<Question>=this.questionService.getQuestionById(id);
    observable.subscribe(
      questionArg =>{
        this.question=questionArg;
      },
      err =>{
        console.log("error in getquestion by Id"+err.message);
      }
    );
   }
   
  getQuestionById(form:any){
    let data=form.value;
    let id=data.questionId;
    this.getQuestion(id);
    
  }
}
