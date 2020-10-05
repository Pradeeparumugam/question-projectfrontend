import { Component, OnInit } from '@angular/core';
import { Question } from '../class/question';
import { Observable } from 'rxjs';
import { QuestionService } from '../service/questionService';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

 
  constructor( private questionService:QuestionService) { }

  ngOnInit(): void {
  }
  question:Question;
  updateQuestion(form:any){
    let data=form.value;
    let questionId=data.questionId;
    let questionOptions=data.questionOptions;
    let questionTitle=data.questionTitle;
    let questionAnswer=data.questionAnswer;
    let questionMarks=data.questionMarks;
    let chosenAnswer=data.chosenAnswer;
    let marksScored=data.marksScored;
    this.question=new Question(questionId,questionOptions, questionTitle,questionAnswer,
      questionMarks,chosenAnswer,marksScored);
      let observable:Observable<Question>=this.questionService.updateQuestion(this.question);
      let successFun = (questionArg: Question) => {
        this.question= questionArg;
      };
  
      let errFun = err => {
        console.log("err in updatequestioncomponent " + err.message);
      }
  
      
      observable.subscribe(successFun, errFun);
    }


}
