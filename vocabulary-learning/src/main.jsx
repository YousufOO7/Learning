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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const lessonsRes = await fetch ('/lesson_no.json')
          const lessonData = await lessonsRes.json()

          const feedBackRes = await fetch ('/FeedBack.json')
          const feedBackData = await feedBackRes.json()

          return {lessonData, feedBackData}
        }
      },
      {
        path: "/tutorials",
        element: <Tutorials></Tutorials>
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
    loader: async ({params}) => {
      const res = await fetch('/fake_vocabulary_data.json')
      const data = await res.json()
      const singleData = [...data].filter(d => d.lesson_no == params.lesson_no)
      
      return singleData
    }
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
