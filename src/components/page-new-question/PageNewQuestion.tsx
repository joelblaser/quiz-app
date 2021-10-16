import { doc, setDoc } from '@firebase/firestore';
import { firestore } from 'src/firebase/app.firebase';
import { useAuth } from 'src/firebase/hooks/useAuth';
import { useForm } from 'src/hooks/useForm';
import { Answer, Question } from 'src/models/question.model';
import { v4 as uuidv4 } from 'uuid';

export function PageNewQuestion() {
  const { user } = useAuth();

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
    if (user?.email !== 'admin@quiz.ch') {
      alert('Not authorized');
      return;
    }
    setDoc(doc(firestore, 'questions', id), newQuestion).finally(() => {
      clearQuestionForm();
      ClearAnswer1Form();
      ClearAnswer2Form();
      ClearAnswer3Form();
      ClearAnswer4Form();
    });
  };

  const [
    question,
    handleQuestionChange,
    handleQuestionSubmit,
    clearQuestionForm,
  ] = useForm<Question>(onSubmit);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [answer1, handleAnswer1Change, _1, ClearAnswer1Form] =
    useForm<Answer>(onSubmit);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [answer2, handleAnswer2Change, _2, ClearAnswer2Form] =
    useForm<Answer>(onSubmit);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [answer3, handleAnswer3Change, _3, ClearAnswer3Form] =
    useForm<Answer>(onSubmit);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [answer4, handleAnswer4Change, _4, ClearAnswer4Form] =
    useForm<Answer>(onSubmit);

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
