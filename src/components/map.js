import "./map.css"
function Map(){
    return(
        <div>
            <center>
            <iframe className="map map-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15274.64707974261!2d75.69237216016616!3d16.84312732439856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc6ff63a72761ed%3A0xbf78095800f33688!2sThe%20Sigdi!5e0!3m2!1sen!2sin!4v1696818869216!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <iframe className="map map-small" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30549.751600292922!2d75.673789816111!3d16.840293173197537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc6ff63a72761ed%3A0xbf78095800f33688!2sThe%20Sigdi!5e0!3m2!1sen!2sin!4v1696976373542!5m2!1sen!2sin" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </center>
        </div>
    )
}
export default Map;