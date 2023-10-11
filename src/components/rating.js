import Box from "./rating-box";
import "./rating.css"
import fb from "../assets/images/fb.png"
import zom from "../assets/images/zomato.png"
import jd from "../assets/images/jd.png"
function Rating(){
    const values=[
        {
            stars:"4.5/5",
            review:5153,
            img:jd,
            link:"https://www.justdial.com/Bijapur-karnataka/The-Sigdi-Opposite-Sbi-Bank-Solapur-Road-Bijapur/9999P8352-8352-170510230041-C4D5_BZDET",
        },
        {
            stars:"3.5/5",
            review:5,
            img:zom,
            link:"https://www.zomato.com/bijapur/the-sigdi-restaurant-bijapur-locality/order",
        },
        {
            stars:"3.7/5",
            review:46,
            img:fb,
            link:"https://www.facebook.com/thesigdibijapur/",
        }
    ]
    return(
        <div className="main-rating">
        <div className="rating">
            {/* <a className="rating-link first-link" href="/about">About</a>
            <h2 className="rating-head">SIGDI</h2>
            <a className="rating-link" href="/contact">Contact</a> */}
            {/* <div className="rating-box rating-one"></div>
            <div className="rating-box"></div>
            <div className="rating-box"></div> */}
            <Box  className="rating-box rating-one" stars={values[0].stars} review={values[0].review} imgg={values[0].img} link={values[0].link}></Box>
            <Box className="rating-box" stars={values[1].stars} review={values[1].review} imgg={values[1].img} link={values[1].link}></Box>
            <Box className="rating-box" stars={values[2].stars} review={values[2].review} imgg={values[2].img} link={values[2].link}></Box>
        </div>
    </div>
    )
}
export default Rating;