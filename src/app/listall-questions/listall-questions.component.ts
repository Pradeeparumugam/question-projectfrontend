import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/questionService';
import { Question } from '../class/question';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listall-questions',
  templateUrl: './listall-questions.component.html',
  styleUrls: ['./listall-questions.component.css']
})
export class ListallQuestionsComponent {
  
 
  questions:Question[];
  constructor(private questionService:QuestionService) {
    let observable:Observable<Question[]>=this.questionService.allQuestions();
    observable.subscribe(
      questionArg =>{
        this.questions=questionArg;
      },
      err =>{
        console.log("error in the allquestions"+err.message);
      }
    );

   }


}
