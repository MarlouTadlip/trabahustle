import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Index from './Index.jsx'
import FindWork from './landing/FindWork.jsx';
import FindFreelancers from './landing/FindFreelancers.jsx';
import Explore from './landing/Explore.jsx';
import Help from './landing/Help.jsx';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import SignUp1 from './signup/SignUp1.jsx';
import SignUp2 from './signup/SignUp2.jsx';
import UploadResume from './signup/UploadResume.jsx';
import SignUp3 from './signup/SignUp3.jsx';
import ImportLinkedIn from './signup/ImportLinkedIn.jsx'
import UploadSuccess from './signup/UploadSuccess.jsx'
import ImportSuccess from './signup/ImportSuccess.jsx'
import SignUp4 from './signup/SignUp4.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <SignUp/>
  },
  {
    path: '/find-work',
    element: <FindWork/>
  },
  {
    path: '/find-freelancers',
    element: <FindFreelancers/>
  },
  {
    path: '/explore',
    element: <Explore/>
  },
  {
    path: '/help-center',
    element: <Help/>
  },
  {
    path: '/signup-1',
    element:<SignUp1/>
  },
  {
    path: '/signup-2',
    element:<SignUp2/>
  },
  {
    path: '/upload-resume',
    element: <UploadResume/>
  },
  {
    path: '/signup-3',
    element: <SignUp3/>
  },
  {
    path: '/import-linkedin',
    element: <ImportLinkedIn/>
  },
  {
    path: '/upload-resume-success',
    element: <UploadSuccess/>
  },
  {
    path: '/import-linkedin-success',
    element: <ImportSuccess/>
  },
  {
    path: '/signup-4',
    element: <SignUp4/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
