import './App.scss';
import { ContentLayout } from './components/content-layout/ContentLayout';
import { useCollection } from './firebase/hooks/useCollection';

function App() {
  const data = useCollection<any>('items');

  console.log(data);

  return (
    <div className="app">
      <ContentLayout />
    </div>
  );
}

export default App;
