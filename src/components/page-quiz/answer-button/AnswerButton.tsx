import './AnswerButton.scss';
import { Answer } from 'src/models/question.model';

interface Props {
  answer: Answer;
  onClick: (answer: Answer) => void;
}

export function AnswerButton({ answer, onClick }: Props) {
  const onAnswerClick = () => {
    onClick(answer);
  };

  return (
    <button className="answer-button" onClick={onAnswerClick}>
      {answer.text}
    </button>
  );
}
