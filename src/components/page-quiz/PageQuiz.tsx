import './PageQuiz.scss';
import { collection, getDocs, query } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from 'src/firebase/app.firebase';
import { Answer, Question } from 'src/models/question.model';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { AnswerButton } from './answer-button/AnswerButton';
import Typography from '@mui/material/Typography';
import { Sidebar } from './sidebar/Sidebar';

export function PageQuiz() {
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [revealAnswers, setRevealAnswers] = useState(false);
  const [correctQuestions, setCorrectQuestions] = useState(0);

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
    if (answer.isCorrect) {
      setCorrectQuestions((prev) => prev + 1);
    }
  };

  return (
    <div className="page-login">
      <Sidebar
        currentQuestion={currentQuestion}
        amountOfQuestions={quizQuestions.length}
        correctQuestions={correctQuestions}
      />
      <div className="card-container">
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
          <Button
            disabled={!revealAnswers}
            variant="contained"
            onClick={nextQuestion}
          >
            Next question
          </Button>
        </Card>
      </div>
    </div>
  );
}
