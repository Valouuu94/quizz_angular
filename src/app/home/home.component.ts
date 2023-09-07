import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   questions: any = [];

  constructor(private http: HttpClient) {};

  ngOnInit(): void {
    this.getAllQuestions();
  }
  getQuestionJson(){
    return this.http.get<any>("assets/questions.json");
  }
  getAllQuestions() {
    this.getQuestionJson()
      .subscribe(res => {
        this.questions = res.questions;
        
      })
      console.log(this.questions)
  }

  currentQuestionIndex: number = 0;
  selectedAnswerIndex: number | null = null;
  correctAnswers: number[] = [];

  selectAnswer(answerIndex: number) {
      this.correctAnswers = [];
      this.selectedAnswerIndex = answerIndex;
      
      // Affichez la réponse choisie dans la console
      const selectedAnswer = this.questions[this.currentQuestionIndex].answers[answerIndex];
      const correctAnswer = this.questions[this.currentQuestionIndex].correctAnswer ;
      console.log('Réponse choisie :', selectedAnswer);
      console.log('Réponse correct :', correctAnswer);      
      console.log('index reponse :', answerIndex);
      if (selectedAnswer === correctAnswer){
        this.correctAnswers.push(answerIndex);
      }



    
    }
    //console.log(this.questions[this.currentQuestionIndex].question); // renvoie la current question en string

  nextQuestion() {
    this.correctAnswers = [];
    this.currentQuestionIndex++;
    this.selectedAnswerIndex = null; // Réinitialiser la réponse sélectionnée
  }
}
