import React from "react";
import { CarouselHome } from "../Components/CarouselHome";
import "../Styles/Home.css";
import HeroSection from "../Components/HeroSection";
import ReverseContent from "../Components/ReverseContent";
import Newsletter from "../Components/NewsLetter";

export const Home = () => {
  return (
    <>
      <div className="tagLine">
        <h1>
          An investment in knowledge <br />
          pays the best interest.
        </h1>
        <div
          className="input-container"
          style={{
            marginBottom: "4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Enter your E-mail"
            style={{ color: "white", height:'4.2rem', fontSize: "2rem",marginBottom:'3rem'}}
          />

          <button
            style={{ marginTop: "4rem", width: "12.5rem", marginRight: "37%" }}
          >
            Submit
          </button>
        </div>

        <p>You Partners in Financial Freedom</p>
      </div>

      <div className="tagLine">
        <h1>
          We Train You Gain.
        </h1>
        <p style={{ marginTop: "-15px" }}>Change Your Way of Trading</p>
      </div>
      <CarouselHome />
      <br />
      <br />

      <HeroSection />

      <ReverseContent />
      <Newsletter />
    </>
  );
};
