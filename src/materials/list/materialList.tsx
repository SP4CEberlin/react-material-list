import {Container} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {Material} from "../../models/model";

export function MaterialList( probs:any ) {
    const [materials, setMaterials] = useState<Material[]>()
    useEffect( () => {
        setMaterials(probs.message);
    }, [probs.message])
    return (
        <Container>
            Material list
            <ul>
                {
                    materials?.map( (material) => (
                        <li key={material.id}>{material.name}</li>
                    ))
                }
            </ul>
        </Container>
    )
}
export default MaterialList;