import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
