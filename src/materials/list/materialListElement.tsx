import {Material} from "../../models/model";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const MaterialListElement = (data:any) => {
    const material: Material = data.message;
    const navigate = useNavigate();
    const editMaterial = (material: Material) => {
        navigate( "../edit" , {
            state: {
                data: material
            }
        })
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