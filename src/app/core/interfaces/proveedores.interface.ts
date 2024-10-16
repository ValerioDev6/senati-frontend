export interface IProveedoresResponse {
	info: Info;
	proveedores: Proveedore[];
}

export interface Info {
	page: number;
	limit: number;
	total: number;
	next: null;
	prev: null;
}

export interface Proveedore {
	id_proveedor: string;
	id_persona: string;
	estado_proveedor: string;
	created_at: Date;
	updated_at: Date;
	nombre_comercial: string;
	tb_personas: TBPersonas;
}

export interface TBPersonas {
	id_persona: string;
	nombres: string;
	correo: string;
	id_tipo_persona: string;
	id_tipo_documento: string;
	id_sexo: string;
	fecha_nacimiento: Date;
	id_direccion: string;
	id_pais: string;
	id_tipo_telefono: string;
	apellido_paterno: string;
	apellido_materno: string;
	numero_documento: string;
	telefono: string;
	tb_tipo_persona: TBTipoPersona;
	tb_tipo_documento: TBTipoDocumento;
	tb_sexo: TBSexo;
	tb_direccion: TBDireccion;
	tb_pais: TBPais;
	tb_tipo_telefono: TBTipoTelefono;
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

export interface TBTipoDocumento {
	id_tipo_documento: string;
	documento: string;
}

export interface TBTipoPersona {
	id_tipo_persona: string;
	tipo_persona: string;
	descripcion: string;
}

export interface TBTipoTelefono {
	id_tipo_telefono: string;
	tipo_telefono: string;
	descripcion: string;
}
