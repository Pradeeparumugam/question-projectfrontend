export class UpdateQuestion{
    questionId:number;
    questionOptions:String;
    questionTitle:String;
    questionAnswer:number;
    questionMarks:number;
    chosenAnswer:number;
     marksScored:number;
     
     /*constructor(questionOptions:String, questionTitle:String,questionAnswer:number,
      questionMarks:number,chosenAnswer:number,marksScored:number){
          this.questionOptions=questionOptions;
          this.questionTitle=questionTitle;
          this.questionAnswer=questionAnswer;
          this.questionMarks=questionMarks;
          this.chosenAnswer=chosenAnswer;
          this.marksScored=marksScored;
      }
      */
      constructor(questionId:number, questionOptions:String, questionTitle:String,questionAnswer:number,
          questionMarks:number,chosenAnswer:number,marksScored:number){
              this.questionId=questionId;
              this.questionOptions=questionOptions;
              this.questionTitle=questionTitle;
              this.questionAnswer=questionAnswer;
              this.questionMarks=questionMarks;
              this.chosenAnswer=chosenAnswer;
              this.marksScored=marksScored;
          }
          
      getquestionId(){
          return this.questionId;
      }

      getquestionOptions(){
          return this.questionOptions;
      }
      getquestionTitle(){
          return this.questionTitle;
      }
      getquestionAnswer(){
          return this.questionAnswer;
      }
      getquestionMarks(){
          return this.questionMarks;
      }
      getchosenAnswer(){
          return this.chosenAnswer;
      }
      getmarksScored(){
          return this.marksScored;
      }


}