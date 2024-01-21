// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';


// const Header = ({ user, onLogout }) => {
//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setScrolling(true);
//       } else {
//         setScrolling(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleBurgerClick = () => {
//     const nav = document.getElementById('nav-ul');
//     nav.classList.toggle('toggle');
//   };

//   return (
//     <header className={`header ${scrolling ? 'out' : ''}`} role="banner">
//       <div className="header-container fade-in">
//         <a href="#!" className="logo">
//           <img src="/img/IMG_9127.PNG" className="logo-icon" alt="Logo" />
//         </a>
//         <nav id="nav">
//           <ul id="nav-ul">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/course">Content</Link></li>
//             <li><Link to="/free-lesson">Trial</Link></li>
//             <li><Link to="/login">{user ? 'Logout' : 'Login'}</Link></li>
//             <li><Link to="/register">Register</Link></li>
//           </ul>
//         </nav>
//         <span className="hamburger" id="button" onClick={handleBurgerClick}>
//           <i className="fa-solid fa-bars"></i>
//         </span>
//       </div>
//     </header>
//   );
// };

// export default Header; 


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const Header = ({ user, onLogout }) => {
//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolling(window.scrollY > 100);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleBurgerClick = () => {
//     const nav = document.getElementById('nav-ul');
//     nav.classList.toggle('toggle');
//   };

//   return (
//     <header className={`header ${scrolling ? 'out' : ''}`} role="banner">
//       <div className="header-container fade-in">
//         <Link to="/" className="logo">
//           <img src="/img/IMG_9127.PNG" className="logo-icon" alt="Logo" />
//         </Link>
//         <nav id="nav">
//           <ul id="nav-ul">
//             <li><Link to="/" onClick={handleBurgerClick}>Home</Link></li>
//             <li><Link to="/course" onClick={handleBurgerClick}>Content</Link></li>
//             <li><Link to="/free-lesson" onClick={handleBurgerClick}>Trial</Link></li>
//             <li><Link to="/login" onClick={handleBurgerClick}>{user ? 'Logout' : 'Login'}</Link></li>
//             <li><Link to="/register" onClick={handleBurgerClick}>Register</Link></li>
//           </ul>
//         </nav>
//         <span className="hamburger" id="button" onClick={handleBurgerClick}>
//           <i className="fa-solid fa-bars"></i>
//         </span>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user, onLogout, showModeratorBoard, showAdminBoard }) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBurgerClick = () => {
    const nav = document.getElementById('nav-ul');
    nav.classList.toggle('toggle');
  };

  return (
    <header className={`header ${scrolling ? 'out' : ''}`} role="banner">
      <div className="header-container fade-in">
        <Link to={"/home"} className="logo">
          <img src="/img/IMG_9127.PNG" className="logo-icon" alt="Logo" />
        </Link>

        <nav id='nav'>
          <ul id="nav-ul">

            <li>
              <Link to="/course" onClick={handleBurgerClick}>Content</Link>
            </li>

            <li>
              <Link to="/free-lesson" onClick={handleBurgerClick}>Trial</Link>
            </li>

            {showModeratorBoard && (
              <li>
                <Link to={"/mod"}>
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li>
                <Link to={"/admin"}>
                  Admin Board
                </Link>
              </li>
            )}

            {user && (
              <li>
                <Link to={"/user"}>
                  User
                </Link>
              </li>
            )}


            {user ? (
              <div className='sign'>
                <li>
                  <Link to={"/profile"} onClick={handleBurgerClick} >
                    {user.username}
                  </Link>
                </li>
                <li>
                  <a href="/" onClick={onLogout}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className='sign'>
                <li>
                  <Link to={"/login"} onClick={handleBurgerClick} >
                    Login
                  </Link>
                </li>

                <li>
                  <Link to={"/register"} onClick={handleBurgerClick} >
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </nav>

        <span className="hamburger" id="button" onClick={handleBurgerClick}>
          <i className="fa-solid fa-bars"></i>
        </span>
      </div>
    </header>
  );
};

export default Header;







