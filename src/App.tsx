import React, {useEffect} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import MaterialList from "./materials/list/materialList";
import MaterialEdit from "./materials/edit/materialEdit";
import logo from "./images/lum-logo.png"
import {useDispatch} from "react-redux";
import {initMaterialList} from "./features/material/materialSlice";

function App() {
    const dispatch = useDispatch();

    useEffect( () => {
        const fetchMaterialData = async () => {
            try {
                const res = await fetch('./materialsMock.json');
                const data = await res.json();
                dispatch(initMaterialList(data));
            } catch (error) {
                console.error('Loading Error.', error);
            }
        }
        fetchMaterialData().then(n => null);
    }, [dispatch])


  return (
    <div className="App">
        <a href="/materials">
            <img src={logo} alt="LUM GmbH Logo"/>
        </a>
        {/* This is comparable to routing and router outlet in Angular */}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to={"/materials"}/>}></Route>
                <Route path="/materials" element={<MaterialList />}></Route>
                <Route path="/edit" element={<MaterialEdit />}></Route>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
