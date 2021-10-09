import './App.css';
import { useCollection } from './firebase/hooks/useCollection';

function App() {
  const [data] = useCollection<any[]>('items');

  console.log(data);

  return <div className="App"></div>;
}

export default App;
