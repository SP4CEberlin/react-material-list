import React, {useEffect, useState} from 'react';
import {Material} from "./models/model";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import MaterialList from "./materials/list/materialList";
import MaterialEdit from "./materials/edit/materialEdit";
import logo from "./images/lum-logo.png"

function App() {
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
    }, [])

  return (
    <div className="App">
      <a href="/materials">
          <img src={logo} alt="LUM GmbH Logo"/>
      </a>

        {/* This is comparable to routing and router outlet in Angular */}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to={"/materials"}/>}></Route>
                <Route path="/materials" element={<MaterialList message={materials}/>}></Route>
                <Route path="/edit" element={<MaterialEdit />}></Route>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
