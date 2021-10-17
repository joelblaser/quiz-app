import { collection, getDocs, query, where } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from 'src/firebase/app.firebase';
import { Question } from 'src/models/question.model';

export function PageQuiz() {
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);

  console.log(quizQuestions);

  useEffect(() => {
    const questionsRef = collection(firestore, 'questions');
    getDocs(query(questionsRef))
      .then((snapshot) => {
        return snapshot.docs
          .map((doc) => (doc.data() as Question).id)
          .sort(() => 0.5 - Math.random())
          .slice(0, 10);
      })
      .then((ids) => {
        return getDocs(query(questionsRef, where('id', 'in', ids))).then(
          (snapshot) => {
            return snapshot.docs
              .map((doc) => doc.data() as Question)
              .sort(() => 0.5 - Math.random());
          }
        );
      })
      .then((questions) => {
        setQuizQuestions(questions);
      });
  }, []);

  return <div>PageQuiz</div>;
}
