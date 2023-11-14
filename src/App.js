import './App.css';


import Home from './components/Home/Home.js';
import PageNotFound from './components/PagenotFound.js';
import Organiser from './components/organisers/OrgTest';
import Login from './components/login/LoginSup';

import Verify from "./components/login/verifyOtp.js";
import Forgot from "./components/login/forgot.js";


import Cosplay from './components/CosplayReg.js'
import Sona from './components/SonaReg.js'

import Videography from "./components/Events/Videography.js"
import Quiz from './components/Events/QuizClub.js'
import DanceClub from './components/Events/DanceClub.js';
import Drama from './components/Events/DramaClub.js';
import Elocution from './components/Events/Elocution.js';
import Game from './components/Events/Game.js';
import Hobby from './components/Events/HobbyClub.js';
import Music from './components/Events/MusicClub.js';
import Photography from './components/Events/Photography.js';
import Writer from './components/Events/Writers.js';
import Signup from './components/login/SignUp.js';








import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { wakeupServer, verifyToken } from './components/helper/axiosHelper';
import AdminLogin from './components/admin/AdminLogin';
import AdminEventUserList from './components/admin/AdminEventUserList';
import AdminEvents from './components/admin/AdminEvents';
import AdminClubs from './components/admin/AdminClubs';
import AdminCosplay from './components/admin/AdminCosplay';
import AdminSona from './components/admin/AdminSona';
import AdminAllUsers from './components/admin/AdminAllUsers';
import ModVerify from './components/mod/ModVerify';
import ModEvents from './components/mod/ModEvents';
import ModUsers from './components/mod/ModUsers';





function App() {
  const token = localStorage.getItem('token');
  if (token) {
    verifyToken(token);
  }
  wakeupServer();
  const pages = createBrowserRouter([

    {
      path: "/",
      element: <Home></Home>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/signup',
      element: <Signup></Signup>
    },

    // {
    //   path: '/forgot',
    //   element: <Forgot />
    // },

    // {
    //   path: '/verifyOtp',
    //   element: <Verify />
    // },

    /*admin
   {
    path: "/admin",
     element: <AdminLogin />
},
  {
      path: "/admin/cosplay",
      element: <AdminCosplay />
    },
    {
      path: "/admin/sona",
      element: <AdminSona />
    },
    {
      path: "/admin/allusers",
      element: <AdminAllUsers/>
    },
    {
      path: "/admin/clubs",
      element: <AdminClubs />
    },
    {
      path: "/admin/clubs/:event",
      element: <AdminEvents />
    },
    {
      path: "/admin/clubs/:event/:users",
      element: <AdminEventUserList />
    },
    */
    // mods
    // {
    //   path: "/mod",
    //   element: <ModVerify />
    // },
    // {
    //   path: "/mod/events",
    //   element: <ModEvents />
    // },
    // {
    //   path: "/mod/events/:list",
    //   element: <ModUsers />
    // },

    {
      path: "*",
      element: <PageNotFound></PageNotFound>
    },

    {
      path: '/quiz/events',
      element: <Quiz></Quiz>
    },

    // {
    //   path: '/sonabyss/cosplay',
    //   element: <Cosplay></Cosplay>
    // },
    // {
    //   path: '/sonabyss/title',
    //   element: <Sona></Sona>
    // },

    {
      path: '/dance/events',
      element: <DanceClub></DanceClub>
    },
    {
      path: '/drama/events',
      element: <Drama></Drama>
    },
    {
      path: '/elocution/events',
      element: <Elocution></Elocution>
    },
    {
      path: '/game/events',
      element: <Game></Game>
    },
    {
      path: '/hobby/events',
      element: <Hobby></Hobby>
    },
    {
      path: '/music/events',
      element: <Music></Music>
    },
    {
      path: '/photography/events',
      element: <Photography></Photography>
    },
    {
      path: '/videography/events',
      element: <Videography/>
    },
    {
      path: '/writer/events',
      element: <Writer></Writer>
    },

    {
      path: "/organiser",
      element: <Organiser></Organiser>
    }
  ]);

  return (
    <main className="App">

      <RouterProvider router={pages}></RouterProvider>

    </main>
  );
}

export default App;
