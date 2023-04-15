import './App.css'
import { createBrowserHistory } from "history";
import { BrowserRouter, Switch } from "react-router-dom";
import { HomeLayout } from "./Layouts/HomeLayout";
import LoginLayout from "./Layouts/LoginLayout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Board from "./pages/Board/Board";
import Comments from "./pages/Comments/Comments";
import Profile from "./pages/Profile/Profile";
import ProjectManagement from "./pages/ProjectManagement/ProjectManagement";
import CreateProject from './pages/ProjectManagement/CreateProjectAuth';

export const history = createBrowserHistory()

function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <HomeLayout exact path='/board' component={Board} />
        <LoginLayout exact path='/register' component={Register} />
        <LoginLayout exact path='/login' component={Login} />
        <LoginLayout exact path='/profile' component={Profile} />
        <HomeLayout exact path='/project-management' component={ProjectManagement} />
        <HomeLayout exact path='/comment' component={Comments} />
        <HomeLayout exact path='/Project/createProjectAuthorize' component={CreateProject} />
        <HomeLayout exact path='/' component={ProjectManagement} />


      </Switch>
    </BrowserRouter>
  );
}

export default App;
