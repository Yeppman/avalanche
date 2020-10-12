import NavbarTwo from "../components/navbar-two";

function/* */er(){
  const bg = 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/20a1c575967065.5c5baa79c7ccc.png'

}

export default function BallHivePage() {
  return (
    <>
      <NavbarTwo />
      <div className="fitter">
        <div 
        style={{'paddingTop':20}}
        className="page-grid">
          <div className="left">
            <p className="h3text">Ball Hive</p>
            <p className="pText">
              Our Flagship product “BALL HIVE” is an app that lets aspiring
              football players create profiles, upload content like highlight
              reels and workout routines, track performances by uploading
              individual statistics vetted by teammates and coaches, and gives
              exclusive information about various football trials near them. The
              app also gives them the capacity to directly connect with other
              players, coaches and scouts. The app also allows users document
              tournament data by allowing participants of tournaments create
              competitions and upload data about best performances and

            </p>
          </div>

          <div className="right">
            <div className="page-grid-image-container">
              <img src='https://newsletter-images-precise.s3.eu-west-2.amazonaws.com/Avalanche/Preview+1.png'
               className="page-grid-image" />
            </div>
          </div>
          
        </div>
      </div>

      <div className="fitter">
          <div className="page-grid">
              <div className="left">
              
              <div className="page-grid-image-container">
              <img src='https://newsletter-images-precise.s3.eu-west-2.amazonaws.com/Avalanche/Preview+1.png'
               className="page-grid-image" />
            </div>
              </div>

              <div className="right">
                    <p className="h3text">Ball Hive</p>
                    <p className="pText">
                    Our Flagship product “BALL HIVE” is an app that lets aspiring
                    football players create profiles, upload content like highlight
                    reels and workout routines, track performances by uploading
                    individual statistics vetted by teammates and coaches, and gives
                    exclusive information about various football trials near them. The
                    app also gives them the capacity to directly connect with other
                    </p>
            </div>
          </div>
      </div>
    </>
  );
}
