import Typography from '@mui/material/Typography';

interface Props {
  title: string;
}

export function Sidebar({ title }: Props) {
  return (
    <div className="sidebar">
      <Typography fontWeight="bold" variant="h6" component="p">
        {title}
      </Typography>
    </div>
  );
}
