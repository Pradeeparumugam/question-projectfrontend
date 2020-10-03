import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ListallQuestionsComponent } from './listall-questions/listall-questions.component';
import { GetquestionByIdComponent } from './getquestion-by-id/getquestion-by-id.component';
import { QuestionService } from './service/questionService';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DeleteQuestionByIdComponent } from './delete-question-by-id/delete-question-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    AddQuestionComponent,
   
    ListallQuestionsComponent,
    GetquestionByIdComponent,
    DeleteQuestionByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [QuestionService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
