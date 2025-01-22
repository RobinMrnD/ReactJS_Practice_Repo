
function Button(){
    
    // let count = 0;

    // const handleClick = (name) => {
    //     if (count <3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s!`)
    //     }
    //     else{
    //         console.log(`${name} please stop clicking me`)
    //     }

    // }

    const handleClick = (e) => e.target.textContent = "I have been clicked" ;
    
    return(
        <button onClick={(e) => handleClick(e)}>Click Here</button>
    );
}

export default Button