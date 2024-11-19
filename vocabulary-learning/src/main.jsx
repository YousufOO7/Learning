import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import AboutUs from './components/Layouts/AboutUs';
import Tutorials from './components/Tutorials';
import LessonsDetails from './components/LessonDetails/LessonsDetails';
import StartLearning from './components/Layouts/StartLearning';
import AuthLayout from './components/AuthLayout/AuthLayout';
import Login from './components/AuthLayout/Login';
import Register from './components/AuthLayout/Register';
import AuthProvider from './Provider/AuthProvider';
import PrivateRouts from './components/AuthLayout/PrivateRouts';
import MyProfile from './components/Layouts/MyProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateProfile from './components/Layouts/UpdateProfile';
import 'animate.css';
import ForgotPassword from './components/AuthLayout/ForgotPassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <div className=' justify-center mt-52'>
      <p className="text-4xl font-bold flex justify-center mt-52">Oooppppss Error: 404 page is not Found</p>
      <div className='my-5 flex justify-center'><Link to="/" className='btn btn-primary'>Back Home</Link></div>
      </div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {

          const feedBackRes = await fetch('/FeedBack.json')
          const feedBackData = await feedBackRes.json()

          return { feedBackData }
        }
      },
      {
        path: "/start-learning",
        element: <PrivateRouts><StartLearning></StartLearning></PrivateRouts>,
        loader: () => fetch('/lesson_no.json')
      },
      {
        path: "/tutorials",
        element: <PrivateRouts><Tutorials></Tutorials></PrivateRouts>
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/my-profile",
        element: <MyProfile></MyProfile>
      },
      {
        path: '/update-profile',
        element: <UpdateProfile></UpdateProfile>
      }
    ]
  },
  {
    path: "/lessons/:lesson_no",
    element: <LessonsDetails></LessonsDetails>,
    loader: async ({ params }) => {
      const res = await fetch('/fake_vocabulary_data.json')
      const data = await res.json()
      const singleData = [...data].filter(d => d.lesson_no == params.lesson_no)

      return singleData
    }
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>
      },
      {
        path: "/auth/forget-password",
        element: <ForgotPassword></ForgotPassword>
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-center"></ToastContainer> 
    </AuthProvider>
  </StrictMode>,
)
