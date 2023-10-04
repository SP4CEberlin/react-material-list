import {Button, Card, CardBody, CardHeader, Container, Form} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {Material} from "../../models/model";
import {useState} from "react";

export function MaterialEdit(){
    const location = useLocation();
    const navigate = useNavigate();
    let material: Material = location.state.data;

    const [formData , setFormData] = useState( {
        id: material.id,
        name: material.name,
        author: material.author,
        isHidden: material.isHidden,
        type: material.type
    })

    // Find out how to centralize this 'handleInputChange' functions centralized,
    // this can come in handy for other forms.
    const handleInputChange = (event: { target: any; }) => {
        const { target } = event;
        const { name, value } = target;
        setFormData({
            ...formData, // Keep existing form data
            [name]: value // Update form data for the input field that changed
        });
    }

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const dataToSubmit = {
            ...formData
        };
        navigate('../materials', {
            state: {
                data: dataToSubmit
            }})
    }

    //todo: simplify this
    const swapValue = ( m:Material ) => {
        material.isHidden = !material.isHidden;
        setFormData({
            ...formData, // Keep existing form data
            isHidden: m.isHidden // Update form data for the input field that changed
        });
        return m;
    }

    return (
        <Container>
            <Card>
                <CardHeader>Edit Material</CardHeader>
                <CardBody>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="m-form-group">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Material Name"
                                defaultValue={material.name}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="m-form-group">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="text"
                                name="author"
                                placeholder="Author"
                                defaultValue={material.author}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="m-form-group">
                            <Form.Label>Phase</Form.Label>
                            <Form.Select
                                defaultValue={material.type}
                                onChange={handleInputChange}
                                name="type">
                                <option value="0">continues (liquid)</option>
                                <option value="1">dispersed (particles)</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="m-form-group">
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                name="isHidden"
                                label={ material.isHidden ? " : Hidden" : " : Not hidden" }
                                defaultChecked={material.isHidden}
                                onClick={ () => swapValue(material)}
                            />
                        </Form.Group>
                        <hr/>
                        <Button className="a-button float-end" type="submit">
                            Submit
                        </Button>
                    </Form>
                </CardBody>
            </Card>
        </Container>
    )

}
export default MaterialEdit;