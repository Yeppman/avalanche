import NavbarTwo from "../components/navbar-two";
import { Fade, Flip, Slide, Reveal } from "react-reveal";
import FooterSection from "../components/footer";
import { FcCheckmark } from "react-icons/fc";
import {} from "@fortawesome/fontawesome-svg-core";
import Navbar from "../components/new-navbar";
import { Parallax, Background } from "react-parallax";
import { GiSoccerBall } from "react-icons/gi";

function Header() {
  // const props = useSpring({ opacity: 1, from: { opacity: 0 } });;
  return (
    <Fade bottom>
      <div
        className="openingBox2"
        // style={{}}
      >
        <p className="openingHead2">Ball Hive</p>
        <p className="openingText2">
          Solving Problems in Sports with Innovative tech solution
        </p>
        <div className="openingButton-box">
          <a className="openingButton2">Get Started</a>
        </div>
      </div>
      <div className="grid-box"></div>
    </Fade>
  );
}

const CardPage = () => {
  return (
    <div className="page-container page-margin">
      <h1 className="card-header-text">BallHive Programs</h1>

      <div className="grid-box">
        <div className="p-card">
          <div className="p-card-body">
            <h1>Digital Academy</h1>
            <p>
              The start up will have its independent scouts, to fish out talents
              and periodically enroll them into the Ball Hive Academy.
            </p>
            {/* <button className="">Learn More</button> */}
          </div>
        </div>
        <div className="p-card">
          <div className="p-card-body">
            <h1>Monthly Rankings</h1>
            <p>Every month based off the various activities and strides of users; a Team of the month will be published based on the individual performances viewed by our analysts. </p>
          </div>
        </div>

        <div className="p-card">
          <div className="p-card-body">
            <h1>Contest</h1>
            <p>Periodically, random top performers of different mini tournaments will be given the platform to play against established Football clubs and Academies, coached by randomly selected coaches from our database.  </p>
          </div>
        </div>
      </div>
    </div>
  );
};

function BallHIveValues() {
  return (
    <div className="">
      <ul className="ballHive-cards-container">
        <li className="ballHive-cards-list">
          <div className="ballHive-cards-image-icon">
            <img
              src="https://tonsser.com/assets/web/home/player-9d188de20b6268ae2c96c26bb29923ab7a9024db0cabdae78ac5890d2d4d7e64.png"
              className="ballHive-cards-image"
            />
          </div>
          <div className="ballHive-cards-content">
            <p className="ballHive-cards-content-text">Lorem Ipsum</p>
            <div className="ballHive-cards-content-button-container">
              <a className="ballHive-cards-content-button">Demo</a>
            </div>
          </div>
        </li>

        <li className="ballHive-cards-list">
          <div className="ballHive-cards-image-icon">
            <img
              src="https://tonsser.com/assets/web/home/player-9d188de20b6268ae2c96c26bb29923ab7a9024db0cabdae78ac5890d2d4d7e64.png"
              className="ballHive-cards-image"
            />
          </div>
          <div className="ballHive-cards-content">
            <p className="ballHive-cards-content-text">Lorem Ipsum</p>
            <div className="ballHive-cards-content-button-container">
              <a className="ballHive-cards-content-button">Demo</a>
            </div>
          </div>
        </li>

        <li className="ballHive-cards-list">
          <div className="ballHive-cards-image-icon">
            <img
              src="https://tonsser.com/assets/web/home/player-9d188de20b6268ae2c96c26bb29923ab7a9024db0cabdae78ac5890d2d4d7e64.png"
              className="ballHive-cards-image"
            />
          </div>
          <div className="ballHive-cards-content">
            <p className="ballHive-cards-content-text">Lorem Ipsum</p>
            <div className="ballHive-cards-content-button-container">
              <a className="ballHive-cards-content-button">Demo</a>
            </div>
          </div>
        </li>
        <li className="ballHive-cards-list">
          <div className="ballHive-cards-image-icon">
            <img
              src="https://tonsser.com/assets/web/home/player-9d188de20b6268ae2c96c26bb29923ab7a9024db0cabdae78ac5890d2d4d7e64.png"
              className="ballHive-cards-image"
            />
          </div>
          <div className="ballHive-cards-content">
            <p className="ballHive-cards-content-text">Lorem Ipsum</p>
            <div className="ballHive-cards-content-button-container">
              <a className="ballHive-cards-content-button">Demo</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

const BriefingSection = () => {
  return (
    <ul className="displayBoxes-box">
      <li className="displayBoxes-list">
        <Flip bottom>
          <div className="displayBoxes-text-content">
            <div className="displayBoxes-icon">
              {/* <img src={Icon1} className="displayBoxes-icon-image" /> */}
              <GiSoccerBall />
            </div>
            <p className="displayBoxes-heading">Transperency</p>
            <p className="displayBoxes-text">
              We believe in an open and purely merit based system of talent
              evaluation.
            </p>
          </div>
        </Flip>
      </li>
      <li className="displayBoxes-list">
        <Flip bottom>
          <div className="displayBoxes-text-content">
            <div className="displayBoxes-icon">
              <GiSoccerBall />
              {/* <img src={Icon2} className="displayBoxes-icon-image" /> */}
            </div>
            <p className="displayBoxes-heading">Dedication</p>
            <p className="displayBoxes-text">
              Our team is passionate and committed to creating better outcomes
              for sports professionals globally through the use of technology
              and innovation.
            </p>
          </div>
        </Flip>
      </li>

      <li className="displayBoxes-list">
        <Flip bottom>
          <div className="displayBoxes-text-content">
            <div className="displayBoxes-icon">
              {/* <img src={Icon2} className="displayBoxes-icon-image" /> */}
              <GiSoccerBall />
            </div>
            <p className="displayBoxes-heading">Democratization</p>
            <p className="displayBoxes-text">
              We believe in creating access and providing equal opportunities
              for everyone, regardless of their backgrounds and identities.
            </p>
          </div>
        </Flip>
      </li>

      <li className="displayBoxes-list">
        <Flip bottom>
          <div className="displayBoxes-text-content">
            <div className="displayBoxes-icon">
              {/* <img src={Icon2} className="displayBoxes-icon-image" /> */}
              <GiSoccerBall />
            </div>
            <p className="displayBoxes-heading">Dedication</p>
            <p className="displayBoxes-text">
              We believe in creating access and providing equal opportunities
              for everyone, regardless of their backgrounds and identities.
            </p>
          </div>
        </Flip>
      </li>
    </ul>
  );
};

function BallHiveIntro() {
  return (
    <>
      <div className="ballHive-intro-container">
        <div className="ballHive-intro-image">
          <img
            src="https://newsletter-images-precise.s3.eu-west-2.amazonaws.com/Avalanche/ballhiveAsset+5%402x.png"
            className="ballHive-intro-logo"
          />
        </div>
        <div className="ballHive-intro-text-content">
          <p className="ballHive-intro-heading">Ball Hive</p>
          <p className="ballHive-intro-text">
            rem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco l
          </p>
        </div>
      </div>
    </>
  );
}

function Intro() {
  return (
    <>
      <div className="page-container">
        <div className="grid-box">
          <div className="openingBox2">
            <p className="openingHead2">Ball Hive</p>
            <p className="openingText2">
              Solving Problems in Sports with Innovative tech solution
            </p>
            <div className="openingButton-box">
              <a className="openingButton2">Get Started</a>
            </div>
          </div>
          <div className="intro-header-img">
            <img src="https://newsletter-images-precise.s3.eu-west-2.amazonaws.com/landing.png" />
          </div>
        </div>
      </div>
    </>
  );
}

const PageContent = () => {
  return (
    <>
      <div className="page-container">
        <div className="grid-box">
          <div className="">
            <p className="h3text">Ball Hive</p>
            <p className="pText">
              Our Flagship product “BALL HIVE” is an app that lets aspiring
              football players create profiles, upload content like highlight
              reels and workout routines, track performances by uploading
              individual statistics vetted by teammates and coaches, and gives
              exclusive information about various football trials near them.
              {/* The
              app also gives them the capacity to directly connect with other
              players, coaches and scouts. The app also allows users document
              tournament data by allowing participants of tournaments create
              competitions and upload data about best performances and */}
            </p>
            <div className="">
              <h3 className="h3text">Programs</h3>
              <p className="pText">
                As an aspiring football professional, we help you build and
                optimize your profile, upload highlight reels, track your
                progress and performances .
              </p>
              <div className="page-content-box">
                <ul className="page-content-order">
                  <li className="page-content-order-list">
                    <span>
                      <FcCheckmark />
                    </span>{" "}
                    Create your profile.
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
                <a className="page-content-button">Get Started</a>
              </div>
            </div>
          </div>
          <div className="intro-page-header">
            <img src="https://newsletter-images-precise.s3.eu-west-2.amazonaws.com/Avalanche/Transparent/15.10.2020_03.23.30_REC-removebg-preview.png" />
          </div>
        </div>

        <div className="grid-box">
          <div>
            <img src="https://newsletter-images-precise.s3.eu-west-2.amazonaws.com/Avalanche/Transparent/13.10.2020_05.40.17_REC-removebg-preview.png" />
          </div>
          <div className="">
            <h3 className="h3text">SCOUTS</h3>
            <p className="pText">
              We are leveraging on technology to improve scouting by giving
              scouts access to a broad and diverse database of talents. We are
              creating a platform for millions of talents to prove themselves to
              scouts.
            </p>
            <div className="page-content-box">
              <ul className="page-content-order">
                <li className="page-content-order-list">
                  <span>
                    <FcCheckmark />
                  </span>{" "}
                  Get access to our pool of talents and study expert reports and
                  analytics.{" "}
                </li>
                <li className="page-content-order-list">
                  <span>
                    <FcCheckmark />
                  </span>{" "}
                  Use our advance search filter to find talents that fit your
                  requirements.
                </li>
              </ul>
            </div>
            <div className="page-content-button-box">
              <a className="page-content-button">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function BallHivePage() {
  // const image1 = "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  const image1 =
    "https://newsletter-images-precise.s3.eu-west-2.amazonaws.com/Avalanche/Sports+Avalanche.png";

  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
  };
  const insideStyles = {
    // background: "white",
    fontSize: 50,
    fontWeight: 700,
    padding: 20,
    color: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };
  return (
    <>
      <Navbar />
      <div className="page-container">
        <BallHiveIntro />
      </div>
      <PageContent />
      <div className="page-container">
        <CardPage />
      </div>

      <div className="page-container">
        <BriefingSection />
      </div>

      <FooterSection />
    </>
  );
}
