import './PageResults.scss';
import { useParams } from 'react-router-dom';
import { useDoc } from 'src/firebase/hooks/useDoc';
import { QuizResult } from 'src/models/quiz.model';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export function PageResults() {
  const { resultId } = useParams<{ resultId: string }>();

  const result = useDoc<QuizResult>('results', resultId);

  const correctQuestions =
    result?.questions
      .map((q) => q.answered.isCorrect)
      .reduce((sum, correct) => sum + (correct ? 1 : 0), 0) || 0;

  return (
    <div className="page-results">
      <Card className="result-card">
        <Typography
          fontWeight="bold"
          variant="h5"
          component="p"
          className="title"
        >
          {`Quiz Result - ${correctQuestions} of 10 correct answered`}
        </Typography>
        {result?.questions.map(({ question }, index) => (
          <div key={index} className="question">
            <Typography fontWeight="bold" component="p">
              {question.text}
            </Typography>
            <div className="answers">
              {question.answers.map((answer, i) => (
                <Typography
                  key={i}
                  component="p"
                  style={{ fontWeight: answer.isCorrect ? 'bold' : 'normal' }}
                >
                  {answer.text}
                </Typography>
              ))}
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
