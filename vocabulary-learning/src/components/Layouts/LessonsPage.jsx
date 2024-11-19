import React, { useContext } from "react";
import { Link, Navigate, useLoaderData, useNavigate } from "react-router-dom";
import FeedBack from "./FeedBack";
import Graf from "./Graf";
import { AuthContext } from "../../Provider/AuthProvider";

function LessonsPage() {
  const { user } = useContext(AuthContext);
  const lessons = useLoaderData();
  const navigate = useNavigate();
  const { feedBackData } = lessons;
  return (
    <div className="bg-base-100">

      <section className="grid lg:grid-cols-2 gap-2 w-10/12 mx-auto py-5">
        <div><FeedBack feedBackData={feedBackData}></FeedBack></div>

        <div><Graf></Graf></div>
      </section>

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
        {
          user && user?.email ? <Link className="btn btn-primary" to="/tutorials">View More Tutorials</Link> : <Link 
          to="/auth/login"
            className="btn btn-primary"
          >
            View More Tutorials
          </Link>
        }

      </div>
    </div>
  );
}

export default LessonsPage;
