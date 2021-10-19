import './PageQuiz.scss';
import { collection, getDocs, query } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from 'src/firebase/app.firebase';
import { Answer, Question } from 'src/models/question.model';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { AnswerButton } from './answer-button/AnswerButton';

export function PageQuiz() {
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [revealAnswers, setRevealAnswers] = useState(false);

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
  };

  return (
    <div className="page-login">
      <Card className="question-card">
        <p>{quizQuestions[currentQuestion]?.text}</p>
        <Button
          disabled={!revealAnswers}
          variant="contained"
          onClick={nextQuestion}
        >
          Next question
        </Button>
        <div className="answers-grid">
          {quizQuestions[currentQuestion]?.answers.map((answer, index) => (
            <AnswerButton key={index} answer={answer} onClick={onAnswerClick} />
          ))}
        </div>
      </Card>
    </div>
  );
}
