import './App.css';
import { Header } from './components/header/Header';
import { useCollection } from './firebase/hooks/useCollection';

function App() {
  const [data] = useCollection<any[]>('items');

  console.log(data);

  return (
    <div className="app">
      <Header />
    </div>
  );
}

export default App;
