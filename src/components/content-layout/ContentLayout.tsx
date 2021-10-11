import './ContentLayout.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from '../header/Header';
import { SignUp } from '../sign-up/SignUp';
import { PageLogin } from '../page-login/PageLogin';

export function ContentLayout() {
  return (
    <div>
      <Header />
      <div className="content">
        <BrowserRouter>
          <Route path="/login">
            <PageLogin />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
        </BrowserRouter>
      </div>
    </div>
  );
}
