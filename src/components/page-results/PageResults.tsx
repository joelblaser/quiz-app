import './PageResults.scss';
import { useParams } from 'react-router-dom';
import { useDoc } from 'src/firebase/hooks/useDoc';
import { QuizResult } from 'src/models/quiz.model';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export function PageResults() {
  const { resultId } = useParams<{ resultId: string }>();

  const result = useDoc<QuizResult>('results', resultId);

  return (
    <div className="page-results">
      <Card className="result-card">
        <Typography fontWeight="bold" variant="h5" component="p">
          Quiz Result
        </Typography>
        {result?.questions.map(({ question }, index) => (
          <div key={index}>
            <Typography fontWeight="bold" component="p">
              {question.text}
            </Typography>
          </div>
        ))}
      </Card>
    </div>
  );
}
