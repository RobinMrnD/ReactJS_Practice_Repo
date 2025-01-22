function Materials(){

    const material1= "Iron";
    const material2= "Wood";

    return(
        <ul>
            <li>Cement</li>
            <li>{material1.toLowerCase()}</li>
            <li>{material2.toUpperCase()}</li>
        </ul>
    );

}

export default Materials