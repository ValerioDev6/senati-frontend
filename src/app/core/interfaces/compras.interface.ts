export interface IComprasPaginationResponse {
	info: Info;
	compras: Compra[];
}

export interface Compra {
	id_compra: string;
	id_metodo_pago: string;
	proveedor_id: string;
	proveedor_ruc: string;
	proveedor_correo: string;
	numero_documento: string;
	compra_subtotal: string;
	compra_igv: string;
	compra_total: string;
	compra_comentario: string;
	fecha_compra: Date;
	tb_proveedores: TBProveedores;
	tb_metodo_pago: TBMetodoPago;
}

export interface TBMetodoPago {
	id_metodo_pago: string;
	nombre_metodo_pago: string;
	descripcion: string;
	estado: number;
}

export interface TBProveedores {
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
}

export interface Info {
	page: number;
	limit: number;
	total: number;
	next: string;
	prev: null;
}
