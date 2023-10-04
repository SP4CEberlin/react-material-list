import {Container} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {Material} from "../../models/model";
import MaterialListElement from "./materialListElement";
import {useLocation} from "react-router-dom";

export function MaterialList( probs:any ) {
    // Get the Materials via probs and store it in the localStorage.
    // This should be a service or some kind of data-store.
    // Look into 'flux', 'redux' or services-architecture for react.

    const location = useLocation();
    const [materials, setMaterials] = useState<Material[]>()

    useEffect( () => {
        if (probs.message) {
            if (probs.message.length !== 0) {
                setMaterials(probs.message);
                localStorage.setItem('dataStore', JSON.stringify(probs.message));
            } else {
                const savedData = localStorage.getItem('dataStore') || "";
                setMaterials(JSON.parse(savedData));
            }
        }
    }, [probs.message]);

    if (location.state) {
        // get data from edit-form
        const updateMaterialId = location.state.data.id;
        let updateMaterial = materials?.find( m => m.id === updateMaterialId);
        if ( updateMaterial ) {
            updateMaterial.name = location.state.data.name;
            updateMaterial.author = location.state.data.author;
            updateMaterial.type = location.state.data.type;
            updateMaterial.isHidden = location.state.data.isHidden;
        }
    }

    return (
        <Container>
            Material list
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Author</th>
                    <th scope="col">Visibility</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        materials?.map( (material) => (
                            <MaterialListElement key={material.id} message={material}/>
                        ))
                    }
                </tbody>
            </table>


        </Container>
    )
}
export default MaterialList;