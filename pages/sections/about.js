import React from "react";
import FooterSection from "../components/footer";
import NavbarTwo from "../components/navbar-two";
import { Parallax, Background } from "react-parallax";


export default function About() {
  
  const image1 = "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
  const insideStyles = {
    // background: "white",
    fontSize:50,
    fontWeight: 700,
    padding: 20,
    color:'white',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };

  return (
    <>
      <NavbarTwo />
      <Parallax bgImage={image1} strength={500}>
      <div style={{ height: 500 }}>
        <p className="for-paralla">The story behind the project</p>
      </div>
    </Parallax>
      <div className="page-container page-margin">
        <div className="about-us"></div>
        <div className="about-us">
          <h1 className="about-us-heading">WHO WE ARE</h1>
          <p className="about-us-text">
            Sports Avalanche Ltd is a Nigerian sports technology start up with a
            diverse team of a Lawyer, a UEFA Accredited sports journalist,
            Software developers, Interface designers and seasoned Business
            advisors. We are focused on providing digital solutions to the
            various problems’ sports enthusiasts face across Africa and the
            world at large. Our flagship product Ball Hive is an app created for
            Football players who are either professionals or aspiring
            professionals, coaches and scouts. The goal is to facilitate
            scouting by giving scouts access to a large database of talented
            players, and give players a platform to track their performance,
            showcase their talents and access exclusive trials across the globe.
          </p>
        </div>
        <div className="about-us">
          <h1 className="about-us-heading">WHY WE DO IT</h1>
          <p className="about-us-text">
            Thousands of aspiring football professionals do not go pro and are
            never able to harness their full potential. This is due to a
            plethora of reasons. First, there is an over reliance on
            intermediaries because players have no tailor made platform to
            directly put their talents on display, track their performances and
            network with people within the footbaq1lling industry. The second
            problem is the lack of funding, which makes players miss out on
            trial opportunities globally. This is as a result of the high
            financial risks involved in aimless travel to chase opportunities
            without guarantees of fair processes, or prior physical or digital
            contact with player profiles.
          </p>
          <p className="about-us-text">
            The second problem is the lack of funding, which makes players miss
            out on trial opportunities globally. This is as a result of the high
            financial risks involved in aimless travel to chase opportunities
            without guarantees of fair processes, or prior physical or digital
            contact with player profiles.
          </p>
          <p className="about-us-text">
            With a passionate and dedicated team, we’re looking to change the
            status quo by providing a mobile platform for football players, to
            enable them track their performances, connect with scouts, and gain
            access to investment opportunities.
          </p>
        </div>
      </div>
      <FooterSection/>
    </>
  );
}
