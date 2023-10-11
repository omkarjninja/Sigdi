import "./about.css"
import Navbar from "./navbar";
function About(){
    const navi={
        firstTitle:"Home",
        firstLink:"/main",
       SecondTitle:"Contact",
       SecondLink:"/contact",
    }
    return(
        <div>
            <Navbar titleOne={navi.firstTitle}  titletwo={navi.SecondTitle}  LinkOne={navi.firstLink}  LinkTwo={navi.SecondLink}></Navbar>    
            <div className="about-head">
                <center>
                <h2 className="about-us">About Us</h2>
                </center>
               
            </div>
            <div className="container-about">
            <div className="mini-about">
             <div className="about-info">
                <div className="mini-info">
                <h2 className="about-header">Hi, Welcome Here!</h2>
                <p className="about-address">Founded with a relentless commitment to culinary excellence, Sigdi has become a beacon of gastronomic delight in Vijayapur. Our journey began with a simple yet profound vision: to craft exceptional dishes that not only tantalize the taste buds but also tell a story of flavors, cultures, and innovation.</p>
                <p className="about-address">Beyond our delectable cuisine, we believe that genuine hospitality is the cornerstone of an extraordinary dining experience. Our friendly and attentive staff is here to ensure that every moment spent at Sigdi is not just a meal but a memorable occasion filled with warmth and care.</p>
                <p className="about-address">At Sigdi, we don't just serve food; we create memories. Join us today and embark on a culinary journey that celebrates the art of flavor, the joy of hospitality, and the beauty of shared moments. We look forward to welcoming you to our table and making your dining experience extraordinary.</p>
                <h3 className="thanks">Thank you for choosing SIGDI as your culinary destination. We can't wait to serve you and make your time with us truly unforgettable.</h3>
                </div>
                </div>

                <div className="about-image">
                </div>
             </div>
            </div>
        </div>
    )
}
export default About;