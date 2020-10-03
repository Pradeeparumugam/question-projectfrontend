import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/questionService';

@Component({
  selector: 'app-delete-question-by-id',
  templateUrl: './delete-question-by-id.component.html',
  styleUrls: ['./delete-question-by-id.component.css']
})
export class DeleteQuestionByIdComponent implements OnInit {
  questionService:QuestionService;
  constructor() { }

  ngOnInit(): void {
  }
  deleteQuestionById(form:any):void{
    let data=form.value;
    let id=form.questionId;
    let observable=this.questionService.deleteQuestionById(id);
    observable.subscribe(
      questionArg=>{
        this.deletedIdIs(id);
      },
      err =>{
        console.log("error in delete qustion by id"+err.message);
      }
    );
  }
deletedIdIs(id:number){
  console.log("the deleted question id is" +id);
}
}
