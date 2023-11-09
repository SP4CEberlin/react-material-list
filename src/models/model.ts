// create model / interface for MaterialList

// model for material
export interface Material {
    id: number;
    name: string;
    author: string;
    type: string;
    isHidden: boolean;
}