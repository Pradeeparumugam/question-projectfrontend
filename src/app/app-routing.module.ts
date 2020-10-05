import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ProjecthomeComponent } from './projecthome/projecthome.component';
import { DeleteQuestionByIdComponent } from './delete-question-by-id/delete-question-by-id.component';
import { GetquestionByIdComponent } from './getquestion-by-id/getquestion-by-id.component';
import { ListallQuestionsComponent } from './listall-questions/listall-questions.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';


const routes:Routes=[
  {
    path:'app-projecthome',
    component:ProjecthomeComponent
  },
  {
    path:'app-add-question',
    component:AddQuestionComponent
  },
  {
    path:'app-listall-questions',
    component:ListallQuestionsComponent
  },
  {
    path:'app-getquestion-by-id',
    component:GetquestionByIdComponent
  },
  {
    path:'app-delete-question-by-id',
    component:DeleteQuestionByIdComponent
  },
  {
    path:'app-update-question',
    component:UpdateQuestionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
