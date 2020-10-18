import NavbarTwo from "../../components/navbar-two";
import FooterSection from "../../components/footer";
import { Fade, Flip, Slide, Reveal } from "react-reveal";

import Link from "next/link";

const potrait =
  "https://www.duckerfrontier.com/wp-content/uploads/2019/01/Chris-Fisher225x225.png";
const AttorneyF_Image =
  "https://newsletter-images-precise.s3.eu-west-2.amazonaws.com/Avalanche/AttroneyF.jpeg";

const pichImg = 'http://www.pitchhubghana.com/wp-content/uploads/2018/01/PH-LOGO_3-2.png'

const instagramIcon =
  "https://cdn.iconscout.com/icon/premium/png-64-thumb/instagram-1805197-1532288.png";
const linkedInicon =
  "https://cdn.iconscout.com/icon/free/png-64/linkedin-1464529-1239440.png";
const twitterIcon =
  "https://cdn.iconscout.com/icon/free/png-64/twitter-1464537-1239448.png";

export default function AloBio() {
  return (
    <>
      <NavbarTwo />
      <div className="startUpTeam-section">
        <ul className="startUpTeam-container">
          <Slide bottom>
            <li className="startUpTeam-list">
              <div className="startUpTeam-box">
                <div className="startUpTeam-image-box">
                  <img src={pichImg} className="startUpTeam-image" />
                </div>

                <div className="startUpTeam-box-text-content">
                  <p className="startUpTeam-box-heading">About Pitch Hub</p>
                  <p className="startUpTeam-box-text">
                    The Pitch Hub is a Ghanaian organisation that is aimed at
                    equipping young entrepreneurs in Ghana and Africa with the
                    soft skills that are needed to build and sustain competitive
                    business in the 21st century.
                  </p>
                  <p className="startUpTeam-box-heading"> Our Focus</p>
                  <p className="startUpTeam-box-text">
                    We focus mainly on, investor liaising and capacity building.
                    The Pitch Hub facilitates training of young entrepreneurs in
                    the art of pitching their business ideas and connects them
                    to investors both locally and internationally for funding.
                    The Pitch Hub with support from partners provides business
                    consulting to African entrepreneurs to help grow their
                    businesses. We also undertake outreach programs to tertiary
                    institutions, religious organisations, among others to
                    encourage entrepreneurship among young people who have the
                    drive and passion for business.
                  </p>
                  <div className="startUpTeam-box-socials">
                    <div className="startUpTeam-box-socials-image-content">
                      <img
                        src={instagramIcon}
                        className="startUpTeam-box-socials-image"
                      />
                    </div>

                    <div className="startUpTeam-box-socials-image-content">
                      <img
                        src={linkedInicon}
                        className="startUpTeam-box-socials-image"
                      />
                    </div>

                    <div className="startUpTeam-box-socials-image-content">
                      <img
                        src={twitterIcon}
                        className="startUpTeam-box-socials-image"
                      />
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
