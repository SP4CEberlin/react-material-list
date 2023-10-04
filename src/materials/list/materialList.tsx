import {Container} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {Material} from "../../models/model";
import MaterialListElement from "./materialListElement";

export function MaterialList( probs:any ) {
    const [materials, setMaterials] = useState<Material[]>()
    useEffect( () => {
        setMaterials(probs.message);
    }, [probs.message])
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