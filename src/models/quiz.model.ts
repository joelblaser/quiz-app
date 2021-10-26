import { Answer, Question } from './question.model';

export interface QuestionResult {
  question: Question;
  answered: Answer;
}

export interface QuizResult {
  id: string;
  participantId: string;
  questions: QuestionResult[];
}
