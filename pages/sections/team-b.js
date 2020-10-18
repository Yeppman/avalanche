import React from "react";

import Link from "next/link";
import NavbarTwo from "../components/navbar-two";
import FooterSection from "../components/footer";
import Navbar from "../components/new-navbar";

export default function Teams() {
  const potrait =
    "https://newsletter-images-precise.s3.eu-west-2.amazonaws.com/Avalanche/attorf.jfif";
    const alo = 'https://pbs.twimg.com/profile_images/1294789183203090432/e6BcIEhn_400x400.jpg'
    const oma = 'https://pbs.twimg.com/profile_images/1317905427393380352/Y0pNs5eP_400x400.jpg'
    const pichImg = 'http://www.pitchhubghana.com/wp-content/uploads/2018/01/PH-LOGO_3-2.png'

    const dev = 'https://images.pexels.com/photos/3602934/pexels-photo-3602934.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    const dev2 = 'https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    const dev3 = 'https://images.pexels.com/photos/3656518/pexels-photo-3656518.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

  return (
    <>
      <Navbar />
      <div className="fitter">
        <div className="page-container">
          <div className="team-header-content">
            <div className="team-header-conten">
              <h1 className="team-header-heading">TEAM</h1>
              <p className="team-header-paragraqh">
                Our team make the difference at Sports Avalanche, and that
                includes everyone dedicated to achieving our vision. Our team is
                diverse, consisting of a Lawyer, a UEFA Accredited Sports
                Journalist, Software Developers, Interface Designers and
                seasoned Business Advisors. We are focused on providing digital
                solutions to the various problems sports enthusiasts face across
                Africa and the world at large. We combine deep knowledge of
                industries and geographies with breadth of experience, and we
                are dedicated to a singular goal: connecting aspiring soccer
                professionals to global opportunities, augmenting the scouting
                process, and bringing stellar innovations to sports globally.
              </p>
            </div>
            <div className="team-boxes">
              <div className="team-box">
                <i className="fas fa-chart-pie fa-4x"></i>
                <div className="startUpTeam-image-box">
                  <img src={potrait} className="startUpTeam-image" />
                </div>

                <h3 className="team-box-header">CEO</h3>
                <p className="team-box-text">FAITHFULNESS OKOM</p>
                <p className="team-box-text-b">Lawyer</p>
                <Link href="./teamBio/Okom">
                  <button className="team-box-button">VIEW BIO</button>
                </Link>
              </div>
              <div className="team-box">
                <div className="startUpTeam-image-box">
                  <img src={alo} className="startUpTeam-image" />
                </div>
                <h3 className="team-box-header">CTO</h3>
                <p className="team-box-text">MICHAEL ALO</p>
                <p className="team-box-text-b">Software Developer</p>
                <>
                  <Link href="./teamBio/Alo">
                    <button className="team-box-button">VIEW BIO</button>
                  </Link>
                </>
              </div>
              <div className="team-box">
                <div className="startUpTeam-image-box">
                  <img src={oma} className="startUpTeam-image" />
                </div>
                <h3 className="team-box-header">COO</h3>
                <p className="team-box-text">OMA AKATUGBA</p>
                <p className="team-box-text-b">
                  UEFA Accredited Sports Journalist
                </p>
                <Link href="./teamBio/Oma">
                  <button className="team-box-button">VIEW BIO</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="team-header-content">
            <div className="team-header-conten">
              <h1 className="team-header-heading">ADVISORS</h1>
              <p className="team-header-paragraqh"></p>
            </div>
            <div className="team-boxes">
              <div className="team-box">
                <i className="fas fa-chart-pie fa-4x"></i>
                <div className="startUpTeam-image-box">
                  <img src={pichImg} className="startUpTeam-image" />
                </div>

                <h3 className="team-box-header">
                  BUSINESS CONSULTANTS & FINANCIAL EXPERTS
                </h3>
                <p className="team-box-text">The Pitch Hub</p>
                <Link href="./teamBio/PitchHub">
                    <button className="team-box-button">VIEW BIO</button>
                  </Link>
              </div>
            </div>
          </div>

          <div className="team-header-content">
            <div className="team-header-content">
              <h1 className="team-header-heading">DEVELOPERS</h1>
              <p className="team-header-paragraqh"></p>
            </div>
            <div className="team-boxes">
              <div className="team-box">
                <i className="fas fa-chart-pie fa-4x"></i>
                {/* <div className="startUpTeam-image-box">
                  <img src={dev} className="startUpTeam-image" />
                </div> */}

                <h3 className="team-box-header">SOFTWARE DEVELOPER</h3>
                <p className="team-box-text">Adebayo Taiwo</p>
              </div>
              <div className="team-box">
                {/* <div className="startUpTeam-image-box">
                  <img src={dev2} className="startUpTeam-image" />
                </div> */}
                <h3 className="team-box-header">SOFTWARE DEVELOPER</h3>
                <p className="team-box-text">Adebayo Kehinde</p>
              </div>
              <div className="team-box">
                {/* <div className="startUpTeam-image-box">
                  <img src={dev3} className="startUpTeam-image" />
                </div> */}
                <h3 className="team-box-header">UI/UX DESIGNER</h3>
                <p className="team-box-text">Ibraheem Adewale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
}
