export interface IRolesResponse {
	info: Info;
	roles: Role[];
}

export interface Info {
	page: number;
	limit: number;
	total: number;
	next: string;
	prev: null;
}

export interface Role {
	id_rol: string;
	nombre_rol: string;
	descripcion: string;
	estado: boolean;
}
