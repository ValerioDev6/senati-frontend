export interface IPersonalResponse {
    personal: IPersonal[];
}

export interface IPersonal {
    id:           number;
    nombre:       string;
    email:        string;
    rol:          string;
    genero:       Genero;
    tipo_usuario: string;
    estado:       boolean;
    direccion:    string;
}


export enum Genero {
    Agender = "Agender",
    Female = "Female",
    Genderqueer = "Genderqueer",
    Male = "Male",
    NonBinary = "Non-binary",
}
