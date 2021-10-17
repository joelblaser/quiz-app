import './PageQuiz.scss';
import { collection, getDocs, query } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from 'src/firebase/app.firebase';
import { Question } from 'src/models/question.model';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { AnswerButton } from './answer-button/AnswerButton';

export function PageQuiz() {
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const nextQuestion = () => {
    setCurrentQuestion((previous) => {
      if (previous < 9) {
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

  return (
    <div className="page-login">
      <Card className="question-card">
        <p>{quizQuestions[currentQuestion]?.text}</p>
        <Button variant="contained" onClick={nextQuestion}>
          Next question
        </Button>
        <div className="answers-grid">
          <AnswerButton answer={quizQuestions[currentQuestion]?.answers[0]} />
          <AnswerButton answer={quizQuestions[currentQuestion]?.answers[1]} />
          <AnswerButton answer={quizQuestions[currentQuestion]?.answers[2]} />
          <AnswerButton answer={quizQuestions[currentQuestion]?.answers[3]} />
        </div>
      </Card>
    </div>
  );
}
