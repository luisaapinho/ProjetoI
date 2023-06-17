export class Challenge {
    id=0

    multipleChoiceQuestion=""
    multipleChoiceAnswers=[]
    multipleChoiceCorrectAnswer=0

    fillText=""
    fillCorrectAnswers=[]

    shortQuestion=""
    shortCorrectAnswer=""


    
  
    constructor(id,multipleChoiceQuestion,multipleChoiceAnswers,multipleChoiceCorrectAnswer,fillText,fillCorrectAnswers,shortQuestion,shortCorrectAnswer) {
      this.id = id;

      this.multipleChoiceQuestion = multipleChoiceQuestion;
      this.multipleChoiceAnswers = multipleChoiceAnswers;
      this.multipleChoiceCorrectAnswer = multipleChoiceCorrectAnswer;

      this.fillText=fillText;
      this.fillCorrectAnswers=fillCorrectAnswers;

      this.shortQuestion=shortQuestion;
      this.shortCorrectAnswer=shortCorrectAnswer;
      
      
      
    }
  }