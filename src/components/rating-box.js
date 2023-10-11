import "./rating-box.css"
function Box(props){
    return(
        <div className="boxy">
            <center>
            <h3 className="stars">{props.stars}</h3>
            <p className="votes">No of Votes :<a className="review" href={props.link} target="blank"> {props.review}</a></p>
            <img className="boxy-img" src={props.imgg}></img>
            </center>
        </div>
    )
}
export default Box;