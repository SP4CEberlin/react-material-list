import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {Material} from "../../models/model";

interface MaterialState {
    materialsObjectList: Material[];
}

const initialState: MaterialState = {
    materialsObjectList: [],
};

export const todoSlice = createSlice({
    name: 'materialsObjectList',
    initialState,
    reducers: {
        addMaterial: (state , action:PayloadAction<Material>) => {
            const {id , name, type, author, isHidden} = action.payload;
            state.materialsObjectList.push( { id, name, type, author, isHidden } )
        },
        addMaterialList:(state,action:PayloadAction<Material[]>) => {
            state.materialsObjectList = [...state.materialsObjectList, ...action.payload];
        },
        editMaterial: (state, action:PayloadAction<Material>) => {
            const {id, name,type,author, isHidden } = action.payload;
            const newMaterial = {id,name,type,author,isHidden};
            let updateMaterial = state.materialsObjectList.find( m => m.id === newMaterial.id);
            if (updateMaterial){
                updateMaterial.id = newMaterial.id;
                updateMaterial.name = newMaterial.name;
                updateMaterial.type = newMaterial.type;
                updateMaterial.author = newMaterial.author;
                updateMaterial.isHidden = newMaterial.isHidden;
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addMaterial, addMaterialList, editMaterial } = todoSlice.actions

export default todoSlice.reducer