export interface IProductoResponse {
	info: Info;
	productos: Producto[];
}

export interface Info {
	page: number;
	limit: number;
	total: number;
	next: string;
	prev: null;
}

export interface Producto {
	id_producto: string;
	nombre_producto: string;
	descripcion: string;
	stock: number;
	id_categoria: string;
	fecha_creacion: Date;
	id_marca: string;
	is_active: boolean;
	precio_compra: string;
	precio_venta: string;
	producto_img: string;
	fecha_ingreso: Date;
	codigo_producto: string;
	updated_at: Date;
	estado_produto: string;
	id_sucursal: string;
	id_tipo_propietario: string;
	tb_marcas: TBMarcas;
	tb_categorias: TBCategorias;
	tb_tipo_propietario: TBTipoPropietario;
	tb_sucursales: TBSucursales;
}

export interface IProductoSubmit {
	nombre_producto: string;
	descripcion: string;
	stock: number;
	id_categoria: string;
	fecha_creacion: Date;
	id_marca: string;
	is_active: boolean;
	precio_compra: string;
	precio_venta: string;
	producto_img: string;
	fecha_ingreso: Date;
	codigo_producto: string;
	updated_at: Date;
	estado_produto: string;
	id_sucursal: string;
	id_tipo_propietario: string;
	tb_marcas: TBMarcas;
	tb_categorias: TBCategorias;
	tb_tipo_propietario: TBTipoPropietario;
	tb_sucursales: TBSucursales;
}

export interface TBCategorias {
	nombre_cat: string;
}

export interface TBMarcas {
	nombre_marca: string;
}

export interface TBSucursales {
	nombre_sucursal: string;
}

export interface TBTipoPropietario {
	descripcion: string;
}
