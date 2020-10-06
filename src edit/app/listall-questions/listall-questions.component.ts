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
/*removeQuestion(id:number){
    let observable=this.questionService.deleteQuestionById(id);
    observable.subscribe(
      res=>{
       this.removeLocalElement(id);
      },
      err=>{
        console.log("inside removequestion, err is "+err.message);
      }
    );
     }
   
     removeLocalElement(id:number):void{
       console.log("before user removed,length="+this.questions.length); 
       for(let i=0 ;i<this.questions.length;i++ ){
          let question=this.questions[i];
           if(question.questionId===id){
               //index and number of elements to remove
               this.questions.splice(i,1);
           }
        }
          
   }*/