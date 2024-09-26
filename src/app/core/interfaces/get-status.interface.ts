export interface CheckStatusResponse {
  id_personal:  string;
  email:        string;
  estado:       boolean;
  personal_img: string;
  id_rol:       number;
  persona:      Persona;
  token:        string;
}

export interface Persona {
  nombres:    string;
  apellido_p: string;
  apellido_m: string;
}
