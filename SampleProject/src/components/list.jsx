import PropTypes from 'prop-types';

function list(props){

    const category = props.category
    const itemList = props.items
    

    // SORTING METHODS
    // materials.sort((a,b) => a.name.localeCompare(b.name));  ALPHABETICAL ORDER
    // materials.sort((a,b) => a.weight - b.weight); NUMERIC

    // const lightweightMats = materials.filter(materials=> materials.weight <= 50); Checks for materials weighing equal to or less than 50
    // const heavyweightMats = materials.filter(materials=> materials.weight > 50); Checks for material heavier than 50

    const listItems = itemList.map(itemList => <li key={itemList.id}>
                                                    {itemList.name}: &nbsp;
                                                    <b>{itemList.weight}</b> lbs</li>);

    return(<>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
    </>);

}

list.propTypes={
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
                                              name: PropTypes.string,
                                              weight: PropTypes.number                          
    }))

}

list.defaultProps ={
    category: "Category",
    items:[],
}

export default list