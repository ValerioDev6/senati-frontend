export interface IVentasDetallesResponse {
	info: Info;
	detalles: VentaDetalle[];
	resumen: Resumen;
}

export interface VentaDetalle {
	id_detalle_venta: string;
	id_venta: string;
	id_producto: string;
	cantidad: number;
	precio_unitario: string;
	subtotal: string;
	precio: string;
	descuento: string;
	created_at: Date;
	tb_productos: TBProductos;
}

export interface TBProductos {
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
}

export interface Info {
	page: number;
	limit: number;
	total: number;
	next: string;
	prev: null;
}

export interface Resumen {
	cantidad_items: number;
	subtotal: number;
	descuento_total: number;
	monto_total: number;
}
