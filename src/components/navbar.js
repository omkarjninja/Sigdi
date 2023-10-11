import "./navbar.css"
function Navbar(props){
    return(
        <div className="main-navbar">
            <div className="navbar">
                <a className="navbar-link first-link" href={props.LinkOne}>{props.titleOne}</a>
                <h2 className="navbar-head">SIGDI</h2>
                <a className="navbar-link" href={props.LinkTwo}>{props.titletwo}</a>
            </div>
        </div>
    )
}
export default Navbar;