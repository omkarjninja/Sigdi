import "./footer.css"
import fb from "../assets/images/facebook.png"
import call from "../assets/images/call.png"
import mail from "../assets/images/mail.png"
    function Footer(){
        const go1=()=>{ window.location.href="tel:7892264908";}
           const go2=()=>{window.location.href="mailto:thesigdivijaypur@gmail.com";}
           const go3=()=>{ window.open("https://www.facebook.com/thesigdibijapur/", '_blank');  }
        return(
            <div className="footer-body">
                <div className="footer-all">
            
                    <div className="socials">
                        <div className="media" onClick={go1}><a><img className="soc-media" src={call} width="10px"></img></a></div>
                        <div className="media" onClick={go2}><a><img className="soc-media" src={mail}></img></a></div>
                        <div className="media" onClick={go3}><a><img className="soc-media fb" src={fb}></img></a></div>
                    </div>
                
                </div>
            </div>
        )
    }
    export default Footer;