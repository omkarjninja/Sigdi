import "./full.css"
function Heading(props){
    return(
        <div>
            <div className={props.class}>
            <h2 className="full-head not-full-head">{props.title}</h2>
            </div>
        </div>
    )
}
export default Heading;