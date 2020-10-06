import { Component, OnInit } from '@angular/core';
import { Question } from '../class/question';
import { QuestionService } from '../service/questionService';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
//import { FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  constructor(private questionService:QuestionService) {
   /* this.questionService=questionService;
    this.questionService.addquestion(this.question)
    */
   
   }

  ngOnInit(): void {
  }


  question:Question;
  
  addQuestion(form:any){
      let data=form.value;
      let questionOptions=data.questionOptions;
      let questionTitle=data.questionTitle;
      let questionAnswer=data.questionAnswer;
      let questionMarks=data.questionMarks;
      let chosenAnswer=data.chosenAnswer;
      let marksScored=data.marksScored;
      console.log(data.questionOptions);
      this.question=new Question(-1,questionOptions, questionTitle,questionAnswer,
        questionMarks,chosenAnswer,marksScored);
        let successFun = (questionArg: Question) => {
          this.question= questionArg;
        };
    
        let errFun = err => {
          console.log("err in addquestioncomponent " + err.message);
        }
    
        let observable: Observable<Question> = this.questionService.addQuestion(this.question);
        observable.subscribe(successFun, errFun);
      }


  }
 
