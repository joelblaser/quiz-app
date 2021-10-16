import './ContentLayout.scss';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { Header } from '../header/Header';
import { PageLogin } from '../page-login/PageLogin';
import { PageRegister } from '../page-register/PageRegister';
import { PageHome } from '../page-home/PageHome';

export function ContentLayout() {
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
          <PageHome />
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
