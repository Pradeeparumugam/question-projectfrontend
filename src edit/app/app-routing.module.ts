import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AddQuestionComponent } from './add-question/add-question.component';


const routes:Routes=[
  {
    path:'app-add-question',
    component:AddQuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
