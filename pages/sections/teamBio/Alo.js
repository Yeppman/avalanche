import NavbarTwo from "../../components/navbar-two";
import FooterSection from "../../components/footer";
import { Fade, Flip, Slide, Reveal } from "react-reveal";

import Navbar from '../../components/new-navbar'

import {GrFacebook, GrTwitter, GrLinkedinOption} from 'react-icons/gr'


import Link from "next/link";

const potrait =
  "https://www.duckerfrontier.com/wp-content/uploads/2019/01/Chris-Fisher225x225.png";
const AttorneyF_Image =
  "https://newsletter-images-precise.s3.eu-west-2.amazonaws.com/Avalanche/AttroneyF.jpeg";

  const alo = 'https://pbs.twimg.com/profile_images/1294789183203090432/e6BcIEhn_400x400.jpg'

const instagramIcon =
  "https://cdn.iconscout.com/icon/premium/png-64-thumb/instagram-1805197-1532288.png";
const linkedInicon =
  "https://cdn.iconscout.com/icon/free/png-64/linkedin-1464529-1239440.png";
const twitterIcon =
  "https://cdn.iconscout.com/icon/free/png-64/twitter-1464537-1239448.png";

export default function AloBio() {
  return (
    <>
    <Navbar />
      <NavbarTwo />
      <div className="startUpTeam-section">
        <ul className="startUpTeam-container">
          <Slide bottom>
            <li className="startUpTeam-list">
              <div className="startUpTeam-box">
                <div className="startUpTeam-image-box">
                  <img src={alo} className="startUpTeam-image" />
                </div>

                <div className="startUpTeam-box-text-content">
                  <p className="startUpTeam-box-heading">CO-FOUNDER & CTO</p>
                  <p className="startUpTeam-box-text">
                    Michael Alo is a Software Developer, with profound interests
                    in tech solutions and business digitalization. He has a good
                    understanding of technical concepts, possesses great
                    communication skills and has excelled in the past as a team
                    player. He shows strategic and innovative thinking and is
                    also grounded in design thinking. Michael has been a tech
                    entrepreneur for over half a decade and is now focused on
                    building ‘Ball Hive’, the digital platform he hopes can
                    become a lead player in the imminent sports tech revolution.
                  </p>
                  <div className="startUpTeam-box-socials">
                             <div className="startUpTeam-box-socials-image-content">
                               <span>
                                 <GrFacebook />
                               </span>
                             </div>
                             <div className="startUpTeam-box-socials-image-content">
                               <span>
                                 <GrTwitter />
                               </span>
                             </div>
                             <div className="startUpTeam-box-socials-image-content">
                               <span>
                                 <GrLinkedinOption />
                               </span>
                             </div>

                           </div>
                </div>
              </div>
            </li>
          </Slide>
        </ul>
      </div>
    </>
  );
}
