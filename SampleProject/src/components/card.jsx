import sampleimg from "../assets/sampleicon.png"

function Card(){
    return(
        <div className="card">
            <img className="card-image" alt="profile-icon" src={sampleimg}></img>
            <h2 className="title">Profile Card</h2>
            <p className="description"> This is a Sample Profile Card</p>
        </div>
    );

}

export default Card