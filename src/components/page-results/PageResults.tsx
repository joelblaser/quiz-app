import './PageResults.scss';
import { useParams } from 'react-router-dom';
import { useDoc } from 'src/firebase/hooks/useDoc';
import { QuizResult } from 'src/models/quiz.model';

export function PageResults() {
  const { resultId } = useParams<{ resultId: string }>();

  const result = useDoc<QuizResult>('results', resultId);

  console.log(result);

  return <div>PageResults</div>;
}
