import React, {useEffect, useState} from 'react';
import {Material} from "./models/model";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MaterialList from "./materials/list/materialList";
import MaterialEdit from "./materials/edit/materialEdit";

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
        <BrowserRouter>
            <Routes>
                <Route path="/"></Route>
                <Route path="/materials" element={<MaterialList />}></Route>
                <Route path="/edit" element={<MaterialEdit />}></Route>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
