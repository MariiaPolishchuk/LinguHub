import './styles/app-transition.css';
import './styles/app-style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AuthService from "./services/auth.service";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import Home from './components/Home';
import CourseLevels from './components/CourseLevels';
import CourseThemes from './components/CourseThemes';
import ThemeDetails from './components/ThemeDetails';
import TasksPage from './components/TasksPage';
import FreeLessonButton from './components/FreeLessonButton';
import SubscribeButton from './components/SubscribeButton';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

    this.state = {
      user: null,
      showModeratorBoard: false,
      showAdminBoard: false,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  handleLogin(userData) {
    this.setState({ user: userData });
  }

  handleLogout() {
    AuthService.logout();
    this.setState({
      user: null,
      showModeratorBoard: false,
      showAdminBoard: false,
    });
  }

  render() {
    const { user, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <Header user={user} handleLogout={this.handleLogout} />

        {/* <nav className="navbar">
          <Link to={"/"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {user && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {user ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {user.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link" onClick={this.handleLogout}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav> */}

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login onLogin={this.handleLogin} />} />
            <Route path="/register" element={<Register onRegister={this.handleLogin} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/mod" element={<BoardModerator />} />
            <Route path="/admin" element={<BoardAdmin />} />
            <Route path="/course" element={<CourseLevels />} />
            <Route path="/course/:levelId" element={<CourseThemes />} />
            <Route path="/course/:levelId/:themeId" element={<ThemeDetails />} />
            <Route path="/course/:levelId/:themeId/tasks" element={<TasksPage />} />
            <Route path="/free-lesson" element={<FreeLessonButton />} />
            <Route path="/subscription" element={<SubscribeButton />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;

