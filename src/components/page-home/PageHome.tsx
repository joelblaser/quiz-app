import './PageHome.scss';
import { useCollection } from 'src/firebase/hooks/useCollection';
import { Question } from 'src/models/question.model';
import Button from '@mui/material/Button';
import { useRouter } from 'src/hooks/useRouter';

export function PageHome() {
  const router = useRouter();
  const questions = useCollection<Question>('questions');

  const startQuiz = () => {
    router.navigate('/quiz');
  };

  return (
    <div className="page-home">
      <p>Current Questions: {questions.length}</p>
      <Button variant="contained" onClick={startQuiz}>
        Take a quiz
      </Button>
    </div>
  );
}
