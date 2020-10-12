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
            <button className="home-button">Get Started</button>
          </div>
          <div>
            <button className="home-button-b">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PageContent = () => {
  return (
    <div className="page-container">
      <div className="page-content-fit">
        <div className="">
          <h1 className="page-header-text">Built exclusively for you</h1>
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
            <h1>1. Acquisition</h1>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="page-content-box">
              <span className="page-content-icon">
                  <FaBasketballBall />
              </span>
            <h1>2. Activation</h1>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="page-content-box">
            <span className="page-content-icon">
              <FaTableTennis />
            </span>
            <h1>3.Retention</h1>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="page-content-box">
            <span className="page-content-icon">
              <FaTableTennis />
            </span>
            <h1>4.Retention</h1>
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
            <div className="right"></div>
          </div>
        </div>
      </div>

      <div className="page-container">
        <div className="boxHeight">
          <div className="page-grid-b">
            <div className="left"></div>
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
                  their professional status. We are also enabling coaches and
                  aspiring soccer technicians build their profiles to track
                  growth and progress. For so long, tournament data and player
                  records have been poorly organized and managed. We are using
                  advanced technologies to help you track and manage tournament
                  data, player records and capture players brilliance to
                  champion their professional status. We are also enabling
                  coaches and aspiring soccer technicians build their profiles
                  to track growth and progress.
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
            <div className="right"></div>
          </div>
        </div>
      </div>

      <div className="page-container">
        <div className="boxHeight">
          <div className="page-grid-b">
            <div className="left"></div>
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
      <PageContent />
      <FooterSection />
    </>
  );
}
