import First from "./first";
import Full from "./full";
import Image from "./image";
import Info from "./info";
import Navbar from "./navbar";
import Rating from "./rating";
import "./front.css"
import Collection from "./image-collection";
import Heading from "./faq-head";
import Faqu from "./faqu";
import Map from "./map";
import Footer from "./footer";
function Main(){
    const navi={
        firstTitle:"About",
        firstLink:"/about",
       SecondTitle:"Contact",
       SecondLink:"/contact",
    }
    return(
        <div>
            <Navbar titleOne={navi.firstTitle}  titletwo={navi.SecondTitle}  LinkOne={navi.firstLink}  LinkTwo={navi.SecondLink}></Navbar>
            <First></First>
            <Rating></Rating>
            <Info></Info>
            <Full></Full>
            <Collection></Collection>
            <Heading title="Frequently Asked Questions" class="container-name faq-container"></Heading>
            <Faqu></Faqu>
            <Heading title="'Savor the moment, your culinary adventure awaits.'" class="container-name new-container"></Heading>
            <Map></Map>
            <Footer></Footer>
            <Heading title="SIGDI"></Heading>
        </div>
    )
}
export default Main;