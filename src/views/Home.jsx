import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import face from "../assets/face.png"
import Footer from "../components/Footer";
import News from "../components/News";
import Post from "../components/Post";

function Home() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function to() {
    navigate({
      pathname: "/search",
      search: `?query=${query.split(" ").join("%20")}`,
    });
  }

  return (
    <>
      <div className="container">
        <div className="row px-4" >
          <div className="col-lg-6 m-auto">
            <h3 style={{ color: "white" }}>Timeless insights for business and life.</h3>
            <p style={{ color: "white" }}>Every week, I sit down with someone in the Top 1% of their field — from NYT bestselling authors to Oscar winners — to decode what they've mastered. Listen as I uncover the tactics, routines, and habits that will propel you to the top of your field.</p>
          </div>
          <div className="col-lg-6">
            <img className="face" src={face} alt="daniel face" />
          </div>
        </div>
      </div>
      <div className="content">
        <News/>
        <Post/>
        <Footer/>
      </div>
    </>
  );
}

export default Home;
