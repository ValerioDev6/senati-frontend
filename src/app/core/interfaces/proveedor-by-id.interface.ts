export interface IProveedorByIDResponseIndividual {
	id_proveedor: string;
	id_persona: string;
	estado_proveedor: string;
	created_at: Date;
	updated_at: Date;
	nombre_comercial: string;
	total_compras: string;
	ultima_compra: null;
	tb_personas: TBPersonas;
}

export interface TBPersonas {
	nombres: string;
	correo: string;
	fecha_nacimiento: Date;
	numero_documento: string;
	telefono: string;
	tb_direccion: TBDireccion;
	tb_pais: TBPais;
	tb_sexo: TBSexo;
	tb_telefonos_persona: TBTelefonosPersona[];
}

export interface TBDireccion {
	id_direccion: string;
	direccion: string;
	id_tipo_via: string;
	id_tipo_zona: string;
}

export interface TBPais {
	id_pais: string;
	nombre: string;
}

export interface TBSexo {
	id_sexo: string;
	sexo: string;
}

export interface TBTelefonosPersona {
	id_telefono: string;
	id_persona: string;
	id_tipo_telefono: string;
	numero_telefono: string;
}
