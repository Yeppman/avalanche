import React, { useState, useEffect } from "react";
import { useSpring, useTransition, animated, config } from "react-spring";

import { GiSoccerBall } from "react-icons/gi";
import { FaBasketballBall, FaTableTennis } from "react-icons/fa";

import { motion } from "framer-motion";
// import TeamPage from "./sections/team";
import { Fade, Flip, Slide, Reveal } from "react-reveal";

import FooterSection from "./components/footer";
import { FcCheckmark } from "react-icons/fc";

import NavbarTwo from "./components/navbar-two";
import PageBoxes from "./components/page-boxes";
import Navbar from "./components/new-navbar";


const Header = () => {
  return (
    <div className="page-container">
      <div className="header-section">
        <div className="header-text">
          <h1>Sport Avalanche</h1>
          <p>
            Connecting aspiring football professionals to global opportunities
          </p>
        </div>
        <div className="header-button">
          <div>
            <button className="home-button">Sign Up</button>
          </div>
          <div>
            <button className="home-button-b">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};


const CardPage = () => {
  return (
    <div className="page-container page-margin">

    <h1 className="card-header-text">Features</h1>

      <div className="grid-box">
      <div className="p-card">
        <div className="p-card-body">
            <h1>Digital Academy</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
        </div>
      </div>
      <div className="p-card">
        <div className="p-card-body">
            <h1>Sponsorship</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
        </div>
      </div>

      <div className="p-card">
        <div className="p-card-body">
            <h1>Contact</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
        </div>
      </div>

      </div>
    </div>
  )
}

const PageContent = () => {
  return (
    <div className="page-container">
      <div className="page-content-fit">
        <div className="">
          <h1 className="page-header-text">Built exclusively for young Scouts</h1>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit laborum — semper quis lectus nulla.
          </p>
        </div>
        <div className="grid-box">
          <div className="page-content-box">
            <span className="page-content-icon">
              {" "}
              <GiSoccerBall />
            </span>
            <h1>Acquisition</h1>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="page-content-box">
              <span className="page-content-icon">
                  <FaBasketballBall />
              </span>
            <h1>Activation</h1>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="page-content-box">
            <span className="page-content-icon">
              <FaTableTennis />
            </span>
            <h1>Retention</h1>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="page-content-box">
            <span className="page-content-icon">
              <FaTableTennis />
            </span>
            <h1>Retention</h1>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PageContentB = () => {
  return (
    <>
      <div className="page-container">

        <div className="page-heading">
            <h1 className="page-header-text">Lorem Ipsum</h1>
        </div>

        <div className="boxHeight">
          <div className="page-grid-b">
            <Fade left>
              <div className="left">
                <h3 className="h3text">PLAYERS</h3>
                <p className="pText">
                  As an aspiring football professional, we help you build and
                  optimize your profile, upload highlight reels, track your
                  progress and performances and we help you showcase your talent
                  to a large network of scouts. Do you believe in your talent?
                  Kick start your career here:
                </p>
                <div className="page-content-box">
                  <ul className="page-content-order">
                    <li className="page-content-order-list">
                      <span>
                        <FcCheckmark />
                        Create your profile.
                      </span>{" "}
                    </li>
                    <li className="page-content-order-list">
                      <span>
                        <FcCheckmark />
                      </span>{" "}
                      Update and optimize your profile with our expert tips.
                    </li>
                    <li className="page-content-order-list">
                      <span>
                        <FcCheckmark />
                      </span>{" "}
                      Connect directly with scouts.
                    </li>
                    <li className="page-content-order-list">
                      <span>
                        <FcCheckmark />
                      </span>{" "}
                      Benefit from our unending pool of opportunities.{" "}
                    </li>
                  </ul>
                </div>
                <div className="page-content-button-box">
                  <button className="page-content-button">Get Started</button>
                </div>
              </div>
            </Fade>
            <div className="right">
              <img className="img-shadow" src="https://images.unsplash.com/photo-1510597026538-da2e86b8588a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=772&q=80" />
            </div>
          </div>
        </div>
      </div>

      <div className="page-container">
        <div className="boxHeight">
          <div className="page-grid-b">
            <div className="left">
              <img className="img-shadow" src="https://images.unsplash.com/photo-1485110168560-69d4ac37b23e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </div>
            <Fade right>
              <div className="right">
                <h3 className="h3text">SCOUTS</h3>
                <p className="pText">
                  We are leveraging on technology to improve scouting by giving
                  scouts access to a broad and diverse database of talents. We
                  are creating a platform for millions of talents to prove
                  themselves to scouts.
                </p>
                <div className="page-content-box">
                  <ul className="page-content-order">
                    <li className="page-content-order-list">
                      <span>
                        <FcCheckmark />
                      </span>{" "}
                      Get access to our pool of talents and study expert reports
                      and analytics.{" "}
                    </li>
                    <li className="page-content-order-list">
                      <span>
                        <FcCheckmark />
                      </span>{" "}
                      Use our advance search filter to find talents that fit
                      your requirements.
                    </li>
                    <li className="page-content-order-list">
                      <span>
                        <FcCheckmark />
                      </span>{" "}
                      Follow/track players progress and land a talent.
                    </li>
                  </ul>
                </div>
                <div className="page-content-button-box">
                  <a className="page-content-button">Get Started</a>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <div className="page-container">
        <div className="boxHeight">
          <div className="page-grid-b">
            <Fade left>
              <div className="left">
                <h3 className="h3text">COACHES/MANAGERS</h3>
                <p className="pText">
                  For so long, tournament data and player records have been
                  poorly organized and managed. We are using advanced
                  technologies to help you track and manage tournament data,
                  player records and capture players brilliance to champion
                  their professional status.
                </p>
                <div className="page-content-box">
                  <ul className="page-content-order">
                    <li className="page-content-order-list">
                      <span>
                        <FcCheckmark />
                      </span>{" "}
                      Create and update personal career profiles.
                    </li>
                    <li className="page-content-order-list">
                      <span>
                        <FcCheckmark />
                      </span>{" "}
                      Update tournament data.
                    </li>
                    <li className="page-content-order-list">
                      <span>
                        <FcCheckmark />
                      </span>{" "}
                      Track and manage important sporting events.
                    </li>
                  </ul>
                </div>
                <div className="page-content-button-box">
                  <a className="page-content-button">Get Started</a>
                </div>
              </div>
            </Fade>
            <div className="right">
              <img src="https://image.freepik.com/free-photo/football-composition-with-ball-copyspace_23-2147827616.jpg" className="img-shadow" />
            </div>
          </div>
        </div>
      </div>

      <div className="page-container">
        <div className="boxHeight">
          <div className="page-grid-b">
            <div className="left">
            <img src="https://image.freepik.com/free-photo/young-goalkeeper-soccer-man-isolated-academy-soccer-team_1150-14668.jpg" className="img-shadow" />
            </div>
            <Fade right>
              <div className="right">
                <h3 className="h3text">SOCCER ACADEMIES/CLUBS</h3>
                <p className="pText">
                  We’re simplifying data storage for academies, our platform
                  will allow for academies and clubs to open pages, provide
                  frequent updates about their activities, upload mini player
                  profiles and data, and scout talents.
                </p>
                <div className="page-content-box">
                  <ul className="page-content-order">
                    <li className="page-content-order-list">
                      <span>
                        <FcCheckmark />
                      </span>{" "}
                      Showcase your players and various activities.
                    </li>
                    <li className="page-content-order-list">
                      <span>
                        <FcCheckmark />
                      </span>{" "}
                      Track performances of players, and coaches.
                    </li>
                    <li className="page-content-order-list">
                      <span>
                        <FcCheckmark />
                      </span>{" "}
                      Scout and attract young talents.
                    </li>
                  </ul>
                </div>
                <div className="page-content-button-box">
                  <a className="page-content-button">Get Started</a>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Main() {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarTwo />
      <Header />
      <PageContentB />
      <CardPage />
      <PageContent />
      <FooterSection />
    </>
  );
}
