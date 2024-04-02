import React from "react";
import pic from "./assets/pic1.jpg"

function LandingPage(){
    return(
        <div className="main">
            <div className="title">
                <h1>Welcome to Serena<br></br> Found Resort and Beach.</h1>
                <p>Escape to a world where luxury meets transquality,<br></br>indulge in world class amenities, savour gourmet cuisine,<br></br>
                   and immerse yourself in endless activities.
                </p>
                <div className="button">
                    <button>BOOK NOW</button>
                </div>
               
            </div>
            {/* <div className="footer">
                <Footer>
                    <a>We are available 24hrs</a>
                </Footer>
            </div> */}
        </div>
        

    )
}
export default LandingPage