import React from 'react';
import UserGreeting from './components/userGreeting';

function App() {
    return (
        <div>
            <UserGreeting isLoggedIn={true}  />
        </div>
    );
}

export default App;