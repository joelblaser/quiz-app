import './Sidebar.scss';
import Typography from '@mui/material/Typography';

interface Props {
  currentQuestion: number;
  amountOfQuestions: number;
  correctQuestions: number;
}

export function Sidebar({ currentQuestion, amountOfQuestions }: Props) {
  return (
    <div className="sidebar">
      <Typography
        fontWeight="bold"
        variant="h6"
        component="p"
        className="current-question"
      >
        {`Question ${currentQuestion + 1} of ${amountOfQuestions}`}
      </Typography>
    </div>
  );
}
