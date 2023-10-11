import "./home.css"
function Home(){
    const go1=()=>{ window.location.href="/main"  }
    return(
        <div>
            <div className="container">
                <h1>SIGDI</h1>
                <button className="btn" onClick={go1}><h2 className="btn-h2">ENTER</h2></button>
            </div>
        </div>
    )
}
export default Home;