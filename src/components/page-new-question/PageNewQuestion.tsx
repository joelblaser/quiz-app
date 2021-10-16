import { doc, setDoc } from '@firebase/firestore';
import { firestore } from 'src/firebase/app.firebase';
import { useForm } from 'src/hooks/useForm';
import { Answer, Question } from 'src/models/question.model';
import { v4 as uuidv4 } from 'uuid';

export function PageNewQuestion() {
  const onSubmit = () => {
    const id = uuidv4();
    const newQuestion: Question = {
      id: id,
      text: question.text,
      answers: [
        {
          text: answer1.text,
          isCorrect: true,
        },
        {
          text: answer2.text,
          isCorrect: false,
        },
        {
          text: answer3.text,
          isCorrect: false,
        },
        {
          text: answer4.text,
          isCorrect: false,
        },
      ],
    };

    console.log(newQuestion);
    setDoc(doc(firestore, 'questions', id), newQuestion);
  };

  const [question, handleQuestionChange, handleQuestionSubmit] =
    useForm<Question>(onSubmit);

  const [answer1, handleAnswer1Change] = useForm<Answer>(onSubmit);
  const [answer2, handleAnswer2Change] = useForm<Answer>(onSubmit);
  const [answer3, handleAnswer3Change] = useForm<Answer>(onSubmit);
  const [answer4, handleAnswer4Change] = useForm<Answer>(onSubmit);

  return (
    <form onSubmit={handleQuestionSubmit}>
      <label>Question</label>
      <input
        type="text"
        name="text"
        value={question.text || ''}
        onChange={handleQuestionChange}
      />
      <label>Correct answer</label>
      <input
        type="text"
        name="text"
        value={answer1.text || ''}
        onChange={handleAnswer1Change}
      />
      <label>Answer</label>
      <input
        type="text"
        name="text"
        value={answer2.text || ''}
        onChange={handleAnswer2Change}
      />
      <label>Answer</label>
      <input
        type="text"
        name="text"
        value={answer3.text || ''}
        onChange={handleAnswer3Change}
      />
      <label>Answer</label>
      <input
        type="text"
        name="text"
        value={answer4.text || ''}
        onChange={handleAnswer4Change}
      />
      <button type="submit">Save</button>
    </form>
  );
}
