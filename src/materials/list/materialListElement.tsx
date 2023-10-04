import {Material} from "../../models/model";
import {Button} from "react-bootstrap";

const MaterialListElement = (data:any) => {
    const material: Material = data.message;
    const editMaterial = (material: Material) => {
        console.log(material);
    }
    return (
        <tr key={material.id}>
            <th scope="row">{material.name}</th>
            <td>{material.author}</td>
            <td>{material.isHidden? 'hidden' : 'visible'}</td>
            <td>
                <Button
                    className="a-button"
                    onClick={ () => editMaterial(material)}>Edit</Button>
            </td>
        </tr>
    )
}
export default MaterialListElement