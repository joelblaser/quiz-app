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
      <Typography fontWeight="bold" variant="h6" component="p">
        {`Question ${currentQuestion + 1} of ${amountOfQuestions}`}
      </Typography>
    </div>
  );
}
