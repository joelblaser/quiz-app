import { Question } from './question.model';

export interface QuestionResult {
  question: Question;
  correct: boolean;
}

export interface QuizResult {
  id: string;
  participantId: string;
  questions: QuestionResult[];
}
