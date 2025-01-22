import List from "./components/list";

function App() {
  const materials =   [{id:1, name: "wood" , weight: 50},
                      {id:2, name:"iron", weight: 80},
                      {id:3, name:"gold", weight: 75},
                      {id:4, name:"diamond", weight: 40},
                      {id:5, name:"aluminum", weight: 25}];

  const equipment =   [{id:6, name: "speaker" , weight: 10},
                      {id:7, name:"Mixer", weight: 50},
                      {id:8, name:"Jack Hammer", weight: 35},
                      {id:9, name:"Chainsaw", weight: 20},
                      {id:10, name:"Cooler", weight: 20}];  
                    
  return (
    <div>
      {materials.length > 0 && <List items={materials} category="Materials"/>}
      {equipment.length > 0 && <List items={equipment} category="Equipment"/>}
    </div>
  );
}

export default App
