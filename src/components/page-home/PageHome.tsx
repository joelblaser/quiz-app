import './PageHome.scss';
import { useCollection } from 'src/firebase/hooks/useCollection';
import { Question } from 'src/models/question.model';
import Button from '@mui/material/Button';
import { useRouter } from 'src/hooks/useRouter';
import { useAuth } from 'src/firebase/hooks/useAuth';
import { QuizResult } from 'src/models/quiz.model';
import { collection, getDocs, query, where } from '@firebase/firestore';
import { firestore } from 'src/firebase/app.firebase';
import { useEffect, useState } from 'react';

export function PageHome() {
  const router = useRouter();
  const auth = useAuth();

  const questions = useCollection<Question>('questions');
  const [results, setResults] = useState<QuizResult[]>([]);

  useEffect(() => {
    if (!auth.user) return;

    getDocs(
      query(
        collection(firestore, 'results'),
        where('participantId', '==', auth.user.uid)
      )
    ).then((snapshot) => {
      setResults(snapshot.docs.map((doc) => doc.data() as QuizResult));
    });
  }, [auth]);

  const startQuiz = () => {
    router.navigate('/quiz');
  };

  const openResult = (id: string) => {
    router.navigate(`/quiz/results/${id}`);
  };

  return (
    <div className="page-home">
      <p>Current Questions: {questions.length}</p>
      <p>You already took {results.length} quizes</p>
      <Button variant="contained" onClick={startQuiz}>
        Take a quiz
      </Button>
      <h3>Results</h3>
      {results.map((result, i) => (
        <Button
          key={i}
          variant="contained"
          onClick={() => openResult(result.id)}
        >
          {result.id}
        </Button>
      ))}
    </div>
  );
}
