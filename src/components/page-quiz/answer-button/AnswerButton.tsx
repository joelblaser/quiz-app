import { Answer } from 'src/models/question.model';

interface Props {
  answer: Answer;
  onClick: (answer: Answer) => void;
}

export function AnswerButton({ answer, onClick }: Props) {
  return <button>{answer.text}</button>;
}
