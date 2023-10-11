import "./first.css"
function First(){
    const go1=()=>{ window.location.href="tel:7942677523";}
    return(
        <div className="container-first">
             <div className="mini-first">
             <div className="first-info">
                <div className="mini-info">
                <h2 className="first-head">SIGDI</h2>
                <p className="first-address">1st Floor, Kulloli plaza, Solapur Rd, Karnataka Housing Board Colony, Vijayapura, Karnataka</p>
                <a className="first-mail" href="mailto:thesigdivijaypur@gmail.com"><p className="email">Sigdivijaypur@gmail.com</p></a>
                <button className="first-btn" onClick={go1}><p className="call">Make a Call</p></button>
                </div>
                </div>

                <div className="first-image">
                </div>
             </div>
           
        </div>
    )
}
export default First;