import React from 'react';
import PropTypes from 'prop-types';

function UserGreeting(props) {
    
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please Log In</h2>

    
    return(
        props.isLoggedIn ? welcomeMessage : loginPrompt
    );

    // Alternative Way
    // return(
    //     props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2> :
    //     <h2 className="login-prompt">Please Log In</h2>
    // );

}
    UserGreeting.propTypes = {
        isLoggedIn: PropTypes.bool.isRequired,
        username: PropTypes.string.isRequired,
    };
    
    UserGreeting.defaultProps = {
        username: "User",
    };




export default UserGreeting;