import React, {useEffect, useState} from 'react';
import {Material} from "./models/model";

function App() {
  // todo:
  //  add add list
  //  add edit form
    const [materials , setMaterial] = useState<Material[]>()
    useEffect( () => {
        const fetchMaterialData = async () => {
            try {
                const res = await fetch( './materialsMock.json');
                const data = await res.json();
                setMaterial(data);
            } catch ( error) {
                console.error('Loading Error.', error);
            }
        }
        fetchMaterialData().then( n => null);
    })

  return (
    <div className="App">
      <h1>Welcome to LUM material list.</h1>
        <ul>
            {
                materials?.map( (material) => (
                    <li key={material.id}>{material.name}</li>
                ))
            }
        </ul>

    </div>
  );
}

export default App;
