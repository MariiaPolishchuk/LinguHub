// import './styles/app-transition.css';
// import './styles/app-style.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import React, { Component } from "react";
// import { Routes, Route } from "react-router-dom";
// import AuthService from "./services/auth.service";
// import Profile from "./components/profile.component";
// import BoardUser from "./components/board-user.component";
// import BoardModerator from "./components/board-moderator.component";
// import BoardAdmin from "./components/board-admin.component";
// import Home from './components/Home';
// import CourseLevels from './components/CourseLevels';
// import CourseThemes from './components/CourseThemes';
// import ThemeDetails from './components/ThemeDetails';
// import TasksPage from './components/TasksPage';
// import FreeLessonButton from './components/FreeLessonButton';
// import SubscribeButton from './components/SubscribeButton';
// import Login from './components/Login';
// import Register from './components/Register';
// import Header from './components/Header';
// import Footer from './components/Footer';


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.handleLogin = this.handleLogin.bind(this);
//     this.handleLogout = this.handleLogout.bind(this);

//     this.state = {
//       user: null,
//       showModeratorBoard: false,
//       showAdminBoard: false,
//     };
//   }

//   componentDidMount() {
//     const user = AuthService.getCurrentUser();

//     if (user) {
//       this.setState({
//         user,
//         showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
//         showAdminBoard: user.roles.includes("ROLE_ADMIN"),
//       });
//     }
//   }

//   handleLogin(userData) {
//     this.setState({ user: userData });
//   }

//   handleLogout() {
//     AuthService.logout();
//     this.setState({
//       user: null,
//       showModeratorBoard: false,
//       showAdminBoard: false,
//     });
//   }

//   render() {
//     const { user, showModeratorBoard, showAdminBoard } = this.state;

//     return (
//       <div>
//         <Header user={user} handleLogout={this.handleLogout} />
//         <div>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/login" element={<Login onLogin={this.handleLogin} />} />
//             <Route path="/register" element={<Register onRegister={this.handleLogin} />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/user" element={<BoardUser />} />
//             <Route path="/mod" element={<BoardModerator />} />
//             <Route path="/admin" element={<BoardAdmin />} />
//             <Route path="/course" element={<CourseLevels />} />
//             <Route path="/course/:levelId/*" element={<CourseThemes />} />
//             <Route path="/course/:levelId/:themeId" element={<ThemeDetails />} />
//             <Route path="/lessons/*" element={<TasksPage />} />
//             <Route path="/free-lesson" element={<FreeLessonButton />} />
//             <Route path="/subscription" element={<SubscribeButton />} />
//           </Routes>

//         </div>
//         <Footer/>
//       </div>

//     );
//   }
// }

// export default App;

import './styles/app-transition.css';
import './styles/app-style.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useState, useEffect } from "react";
// import { Routes, Route, useLocation, Navigate } from "react-router-dom";
// import AuthService from "./services/auth.service";
// import Profile from "./components/profile.component";
// import BoardUser from "./components/board-user.component";
// import BoardModerator from "./components/board-moderator.component";
// import BoardAdmin from "./components/board-admin.component";
// import Home from './components/Home';
// import CourseLevels from './components/CourseLevels';
// import CourseThemes from './components/CourseThemes';
// import ThemeDetails from './components/ThemeDetails';
// import TasksPage from './components/TasksPage';
// import FreeLessonButton from './components/FreeLessonButton';
// import SubscribeButton from './components/SubscribeButton';
// import Login from './components/Login';
// import Register from './components/Register';
// import Header from './components/Header';
// import Footer from './components/Footer';

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [showModeratorBoard, setShowModeratorBoard] = useState(false);
//   const [showAdminBoard, setShowAdminBoard] = useState(false);
//   const location = useLocation();

//   const handleLogin = (userData) => {
//     setUser(userData);
//   };

//   const handleLogout = () => {
//     AuthService.logout();
//     setUser(null);
//     setShowModeratorBoard(false);
//     setShowAdminBoard(false);
//   };

//   useEffect(() => {
//     const currentUser = AuthService.getCurrentUser();

//     if (currentUser) {
//       setUser(currentUser);
//       setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
//       setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
//     }
//   }, []);



//   return (
//     <div>
//       <Header user={user} handleLogout={handleLogout} />
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/register" element={<Register onRegister={handleLogin} />} />
//           <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
//           <Route path="/user" element={user ? <BoardUser /> : <Navigate to="/login" />} />
//           <Route path="/mod" element={showModeratorBoard ? <BoardModerator /> : <Navigate to="/" />} />
//           <Route path="/admin" element={showAdminBoard ? <BoardAdmin /> : <Navigate to="/" />} />
//           <Route path="/course" element={<CourseLevels />} />
//           <Route path="/course/:levelId/*" element={<CourseThemes />} />
//           <Route path="/course/:levelId/:themeId" element={<ThemeDetails />} />
//           {/* <Route path="/lessons/*" element={<TasksPage />} /> */}
//           <Route path="/course/:levelId/:themeId/:lessonId" element={<TasksPage />} />
//           <Route path="/free-lesson" element={<FreeLessonButton />} />
//           <Route path="/subscription" element={<SubscribeButton />} />
//         </Routes>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
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
import Footer from './components/Footer';

const App = () => {
  const [user, setUser] = useState(null);
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const location = useLocation();

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    AuthService.logout();
    setUser(null);
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
  };

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      setUser(currentUser);
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Header user={user} handleLogout={handleLogout} />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onRegister={handleLogin} />} />
          <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/user" element={user ? <BoardUser /> : <Navigate to="/login" />} />
          <Route path="/mod" element={showModeratorBoard ? <BoardModerator /> : <Navigate to="/" />} />
          <Route path="/admin" element={showAdminBoard ? <BoardAdmin /> : <Navigate to="/" />} />
          <Route path="/course/*" element={<CourseLevels />} />
          <Route path="/course/:levelId/*" element={<CourseThemes />} />
          <Route path="/course/:levelId/:themeId" element={<ThemeDetails />} />
          <Route path="/course/:levelId/:themeId/:lessonId" element={<TasksPage />} />
          <Route path="/free-lesson" element={<FreeLessonButton />} />
          <Route path="/subscription" element={<SubscribeButton />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
