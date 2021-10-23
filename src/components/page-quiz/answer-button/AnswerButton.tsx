import './AnswerButton.scss';
import { Answer } from 'src/models/question.model';

const BLUE = '#cdeefd';
const GREEN = '#b1f3b1';
const RED = '#ff7e82';

interface Props {
  answer: Answer;
  onClick: (answer: Answer) => void;
  revealAnswer: boolean;
}

export function AnswerButton({ answer, onClick, revealAnswer }: Props) {
  const onAnswerClick = () => {
    if (!revealAnswer) {
      onClick(answer);
    }
  };

  const color = revealAnswer ? (answer.isCorrect ? GREEN : RED) : BLUE;

  return (
    <button
      className="answer-button"
      onClick={onAnswerClick}
      style={{ backgroundColor: color }}
    >
      {answer.text}
    </button>
  );
}
