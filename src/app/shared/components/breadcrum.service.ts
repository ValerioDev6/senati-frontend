import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class BreadcrumbService {
	private breadcrumbs = new BehaviorSubject<Array<{ label: string; url: string }>>([]);

	constructor(private router: Router) {
		this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
			const root = this.router.routerState.snapshot.root;
			const breadcrumbs: { label: string; url: string }[] = [
				{ label: '', url: '/' }, // Añadimos "Mantenimiento" por defecto
			];
			this.addBreadcrumb(root, [], breadcrumbs);
			this.breadcrumbs.next(breadcrumbs);
		});
	}

	private addBreadcrumb(
		route: ActivatedRouteSnapshot,
		parentUrl: string[],
		breadcrumbs: Array<{ label: string; url: string }>
	) {
		if (route.data['breadcrumb']) {
			const routeUrl = parentUrl.concat(route.url.map((url) => url.path));
			breadcrumbs.push({
				label: route.data['breadcrumb'],
				url: '/' + routeUrl.join('/'),
			});
		}
		if (route.firstChild) {
			this.addBreadcrumb(route.firstChild, parentUrl.concat(route.url.map((url) => url.path)), breadcrumbs);
		}
	}

	getBreadcrumbs() {
		return this.breadcrumbs.asObservable();
	}
}
