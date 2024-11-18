import React from "react";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import Lessons from "../Lessons";
import FeedBack from "./FeedBack";
import Graf from "./Graf";

function LessonsPage() {
  const lessons = useLoaderData();
  const navigate = useNavigate();
  console.log(lessons)
  const {lessonData, feedBackData} = lessons;
  return (
    <div className="bg-base-100">

      <section className="grid md:grid-cols-2 gap-6 w-10/12 mx-auto py-5">
      <div><FeedBack feedBackData={feedBackData}></FeedBack></div>

      <div><Graf></Graf></div>
      </section>
      {/* Page Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary"> A Vocabulary Learning Application
        </h1>
        <p className="text-gray-600 mt-2">Start with these engaging lessons and tutorials!</p>
      </div>

      

        <div className="overflow-hidden  w-10/12 mx-auto">
          <Lessons 
            lessonData={lessonData}
          ></Lessons>
        </div>
       
      <div className="my-10">
        <h2 className="text-3xl font-bold text-center mb-10 underline text-primary"> Tutorial Section</h2>
        <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="w-[350px] md:w-[600px] overflow-hidden">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4ehG-7v21NQ?si=sOVHqd99wbH9e5a3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className="w-[350px] md:w-[600px] overflow-hidden">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/t7-nb1wlnyA?si=oRD7rq5wtzGis7Dg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
      </div>
     
     
      
      <div className="text-center mb-5">
        <button
          className="btn btn-primary"
          onClick={() => navigate("/tutorials")}
        >
          View More Tutorials
        </button>
      </div>
    </div>
  );
}

export default LessonsPage;
