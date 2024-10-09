import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { CommonModule } from '@angular/common';
import { BreadcrumbService } from './breadcrum.service';

@Component({
	selector: 'app-breadcrumb',
	standalone: true,
	imports: [RouterModule, NzBreadCrumbModule, CommonModule],
	template: `
		<div class=" bg-white px-4 py-2 rounded-md shadow-sm flex items-center">
			<div class="flex-shrink-0 text-sm font-medium text-gray-600">
				{{ breadcrumbs[0]?.label }}
			</div>
			<div class="ml-2 text-sm flex items-center space-x-1">
				<nz-breadcrumb>
					<nz-breadcrumb-item *ngFor="let breadcrumb of breadcrumbs.slice(1)">
						<a
							[routerLink]="breadcrumb.url"
							class="text-sm font-medium text-gray-600 hover:text-blue-500 transition-colors"
						>
							{{ breadcrumb.label }}
						</a>
					</nz-breadcrumb-item>
				</nz-breadcrumb>
			</div>
		</div>
	`,
})
export class BreadcrumbComponent implements OnInit {
	breadcrumbs: Array<{ label: string; url: string }> = [];

	constructor(private breadcrumbService: BreadcrumbService) {}

	ngOnInit() {
		this.breadcrumbService.getBreadcrumbs().subscribe((breadcrumbs) => {
			this.breadcrumbs = breadcrumbs;
		});
	}
}
