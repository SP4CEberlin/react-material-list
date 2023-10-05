import {Card, CardBody, CardHeader, Container} from "react-bootstrap";
import React from "react";
import MaterialListElement from "./materialListElement";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {editMaterial} from "../../features/material/materialSlice";

export function MaterialList() {

    const location = useLocation();

    const materialsObjectList = useSelector( (state: RootState) => state.materials.materialsObjectList);
    const dispatch = useDispatch();

    if (location.state) {
        // get data from edit-form
        const {id , name, type, author, isHidden} = location.state.data;
        dispatch(editMaterial({ id, name, type, author, isHidden }))
    }

    return (
        <Container>
            <Card>
                <CardHeader>Material List</CardHeader>
                <CardBody>
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
                                materialsObjectList?.map( (material) => (
                                    <MaterialListElement key={material.id} message={material}/>
                                ))
                            }
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </Container>
    )
}
export default MaterialList;