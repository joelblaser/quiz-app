import { DocumentData, DocumentReference } from '@firebase/firestore';
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

export interface QuestionResultRequest {
  question: DocumentReference<DocumentData>;
  correct: boolean;
}

export interface QuizResultRequest {
  id: string;
  participantId: string;
  questions: QuestionResultRequest[];
}
