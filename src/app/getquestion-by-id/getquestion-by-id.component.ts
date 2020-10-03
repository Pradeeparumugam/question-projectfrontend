import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../class/question';
import { QuestionService } from '../service/questionService';

@Component({
  selector: 'app-getquestion-by-id',
  templateUrl: './getquestion-by-id.component.html',
  styleUrls: ['./getquestion-by-id.component.css']
})
export class GetquestionByIdComponent {
  question:Question;

  constructor(private questionService:QuestionService) { 
    
}
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
