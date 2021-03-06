import './PageQuiz.scss';
import { collection, doc, getDocs, query, setDoc } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from 'src/firebase/app.firebase';
import { Answer, Question } from 'src/models/question.model';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { AnswerButton } from './answer-button/AnswerButton';
import Typography from '@mui/material/Typography';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from 'src/firebase/hooks/useAuth';
import { useRouter } from 'src/hooks/useRouter';
import { QuizResult } from 'src/models/quiz.model';

export function PageQuiz() {
  const { user } = useAuth();
  const router = useRouter();

  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [revealAnswers, setRevealAnswers] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);

  const nextQuestion = () => {
    setCurrentQuestion((previous) => {
      if (previous < 9) {
        setRevealAnswers(false);
        return previous + 1;
      }
      return previous;
    });
  };

  useEffect(() => {
    getDocs(query(collection(firestore, 'questions')))
      .then((snapshot) => {
        return snapshot.docs
          .map((doc) => doc.data() as Question)
          .sort(() => 0.5 - Math.random())
          .slice(0, 10);
      })
      .then((questions) => {
        return questions.map<Question>((question) => ({
          ...question,
          answers: question.answers.sort(() => 0.5 - Math.random()),
        }));
      })
      .then((questions) => {
        setQuizQuestions(questions);
      });
  }, []);

  const onAnswerClick = (answer: Answer) => {
    setRevealAnswers(true);
    setSelectedAnswers((prev) => [...prev, answer]);
  };

  const saveResults = () => {
    const id = uuidv4();
    const result: QuizResult = {
      id: id,
      participantId: user.uid,
      questions: selectedAnswers.map((answer, i) => ({
        question: quizQuestions[i],
        answered: answer,
      })),
    };
    setDoc(doc(firestore, 'results', id), result).then(() => {
      router.navigate(`/quiz/results/${id}`);
    });
  };

  return (
    <div className="page-quiz">
      <Card className="question-card">
        <Typography
          fontWeight="bold"
          variant="h6"
          component="p"
          className="question"
        >
          {quizQuestions[currentQuestion]?.text}
        </Typography>
        <div className="answers-grid">
          {quizQuestions[currentQuestion]?.answers.map((answer, index) => (
            <AnswerButton
              key={index}
              answer={answer}
              onClick={onAnswerClick}
              revealAnswer={revealAnswers}
            />
          ))}
        </div>
        <div className="card-footer">
          {currentQuestion === 9 && revealAnswers ? (
            <Button variant="contained" onClick={saveResults}>
              Show Results
            </Button>
          ) : (
            <Button
              disabled={!revealAnswers}
              variant="contained"
              onClick={nextQuestion}
            >
              Next question
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
