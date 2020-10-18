import NavbarTwo from "../../components/navbar-two";
import FooterSection from "../../components/footer";
import { Fade, Flip, Slide, Reveal } from "react-reveal";

import Link from "next/link";

import {GrFacebook, GrTwitter, GrLinkedinOption} from 'react-icons/gr'


import Navbar from '../../components/new-navbar'

const potrait =
  "https://www.duckerfrontier.com/wp-content/uploads/2019/01/Chris-Fisher225x225.png";
const AttorneyF_Image =
  "https://newsletter-images-precise.s3.eu-west-2.amazonaws.com/Avalanche/AttroneyF.jpeg";

const oma =
  "https://pbs.twimg.com/profile_images/1317905427393380352/Y0pNs5eP_400x400.jpg";

const instagramIcon =
  "https://cdn.iconscout.com/icon/premium/png-64-thumb/instagram-1805197-1532288.png";
const linkedInicon =
  "https://cdn.iconscout.com/icon/free/png-64/linkedin-1464529-1239440.png";
const twitterIcon =
  "https://cdn.iconscout.com/icon/free/png-64/twitter-1464537-1239448.png";

export default function omahBio() {
  return (
    <>
      <Navbar />
      <div className="startUpTeam-section">
        <ul className="startUpTeam-container">
          <Slide bottom>
            <li className="startUpTeam-list">
              <div className="startUpTeam-box">
                <div className="startUpTeam-image-box">
                  <img src={oma} className="startUpTeam-image" />
                </div>

                <div className="startUpTeam-box-text-content">
                  <p className="startUpTeam-box-heading">CEO , Founder</p>
                  <p className="startUpTeam-box-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
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
      <FooterSection />
    </>
  );
}
