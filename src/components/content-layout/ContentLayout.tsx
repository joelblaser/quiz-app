import './ContentLayout.scss';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { Header } from '../header/Header';
import { PageLogin } from '../page-login/PageLogin';
import { PageRegister } from '../page-register/PageRegister';
import { PageHome } from '../page-home/PageHome';
import { PageNewQuestion } from '../page-new-question/PageNewQuestion';
import { PageQuiz } from '../page-quiz/PageQuiz';
import { useAuth } from 'src/firebase/hooks/useAuth';

export function ContentLayout() {
  const { user } = useAuth();

  return (
    <div className="content">
      <BrowserRouter>
        <Route path="/">
          <Header />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          {user ? <PageHome /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/home" /> : <PageLogin />}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/home" /> : <PageRegister />}
        </Route>
        <Route path="/quiz">
          <PageQuiz />
        </Route>
        <Route path="/questions/new">
          <PageNewQuestion />
        </Route>
      </BrowserRouter>
    </div>
  );
}
