import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/questionService';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-delete-question-by-id',
  templateUrl: './delete-question-by-id.component.html',
  styleUrls: ['./delete-question-by-id.component.css']
})
export class DeleteQuestionByIdComponent  {
  id:number;
  constructor(private route:ActivatedRoute,private questionService:QuestionService) { 
    /*let observable =route.paramMap;//param map is the property in activated route
   observable.subscribe((params:ParamMap)=>{
    let idVal:string =params.get("id");
    let idNum:number=Number(idVal);//converting string to number
    console.log("id available is "+idNum);
    this.deleteQuestion(idNum);
   })*/
   }

deleteQuestion(id:number){
  console.log("the deleted question id is" +id);
  this.questionId=id;
  let observable=this.questionService.deleteQuestionById(id);
    observable.subscribe(
      questionArg=>{
        
        console.log("deleted question Id id"+id);
      },
      err =>{
        console.log("error in delete qustion by id"+err.message);
      }
    );
}
questionId:number=undefined;
deleteQuestionById(form:any){
  
  let data=form.value;
  console.log(data.questionId)
  let id=data.questionId;
  this.deleteQuestion(id);  
}
}
