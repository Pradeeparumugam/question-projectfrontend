import { Question } from '../class/question';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UpdateQuestion } from '../class/updateQuestion';

@Injectable()
export class QuestionService{
    //questions:Question[]=[];
    constructor(private http:HttpClient){

    }

    addQuestion(question:Question):Observable<Question>{
        let url="http://localhost:8686/question/addquestion";
        let observable:Observable<Question>=this.http.post<Question>(url,question);
        return observable;
        //this.questions.push(question);
    }
    updateQuestion(question:UpdateQuestion):Observable<Question>{
        let url="http://localhost:8686/question/update";
        let observable:Observable<Question>=this.http.put<Question>(url,question);
        return observable;
    }
    allQuestions():Observable<Question[]>{
        let url="http://localhost:8686/question/allquestions";
        let observable:Observable<Question[]>=this.http.get<Question[]>(url);

        return observable;
    }
    getQuestionById(id:number):Observable<Question>{
        let url="http://localhost:8686/question/getQuestion/"+id;
        let observable:Observable<Question>=this.http.get<Question>(url);
        return observable;
    }
    deleteQuestionById(id:number):Observable<String>{
        let url="http://localhost:8686/question/deletequestion/"+id;
        let observable:Observable<String>=this.http.delete<String>(url);
        return observable;
    }
    
}