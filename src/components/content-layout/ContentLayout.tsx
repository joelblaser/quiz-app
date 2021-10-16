import './ContentLayout.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from '../header/Header';
import { PageLogin } from '../page-login/PageLogin';
import { PageRegister } from '../page-register/PageRegister';

export function ContentLayout() {
  return (
    <div className="content">
      <BrowserRouter>
        <Route path="/">
          <Header />
        </Route>
        <Route path="/login">
          <PageLogin />
        </Route>
        <Route path="/register">
          <PageRegister />
        </Route>
      </BrowserRouter>
    </div>
  );
}
