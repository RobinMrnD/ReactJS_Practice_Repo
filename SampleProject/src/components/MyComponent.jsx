import React, {useState} from 'react';

function MyComponent(){ 

    const [games, setGames] = useState([]);
    const [gameYear, setGameYear] = useState(new Date().getFullYear());
    const [gameDeveloper, setGameDeveloper] = useState("");
    const [gameName, setGameName] = useState("");


    function handleAddGame(){
        const newGame = { year: gameYear,
                          developer: gameDeveloper,
                          name: gameName };
        
        setGames(g => [...g, newGame]);

        setGameYear(new Date().getFullYear());
        setGameDeveloper("");
        setGameName("");
    }

    function handleRemoveGames(index){
        setGames (g => g.filter((_, i) => i !== index));
    }

    function handleYearChange(event){
        setGameYear (event.target.value);
    }

    function handleDeveloperChange(event){
        setGameDeveloper(event.target.value);
    }
    function handleNameChange(event){
        setGameName(event.target.value);
    }
    return(
        <div>
          <h2>List of Games</h2>
          <ul>
            {games.map((game, index) => 
                <li key={index} onClick={() => handleRemoveGames(index)}>
                    {game.year} {game.developer} {game.name} 
                </li>)}

          </ul>
            <input type="number" value={gameYear} onChange={handleYearChange}/> <br/>
            <input type="text" value={gameDeveloper} onChange={handleDeveloperChange}
                 placeholder ="Enter Game Developer"/><br/>
            <input type="text" value={gameName} onChange={handleNameChange}
                 placeholder ="Enter Game Name"/><br/>
            <button onClick={handleAddGame}>Add Game</button>
        </div>
    )

}

export default MyComponent