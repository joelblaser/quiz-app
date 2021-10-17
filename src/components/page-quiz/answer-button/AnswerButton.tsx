import { Answer } from 'src/models/question.model';

interface Props {
  answer: Answer;
}

export function AnswerButton({ answer }: Props) {
  return <div>{answer.text}</div>;
}
