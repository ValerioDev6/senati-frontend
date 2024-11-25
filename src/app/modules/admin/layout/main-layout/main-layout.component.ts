import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AuthService } from '../../../../core/services/common/auth.service';
import { CheckStatusResponse } from '../../../../core/interfaces/get-status.interface';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@Component({
	selector: 'app-main-layout',
	standalone: true,
	imports: [
		RouterLink,
		RouterOutlet,
		NzIconModule,
		NzLayoutModule,
		NzMenuModule,
		NzInputModule,
		NzBadgeModule,
		NzAvatarModule,
		NzDropDownModule,
		CommonModule,
		NzBreadCrumbModule,
		NzToolTipModule,
		RouterLinkActive,
	],
	templateUrl: './main-layout.component.html',
	styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent implements OnInit {
	personal: CheckStatusResponse | null = null;
	isCollapsed = false;
	private readonly _authService = inject(AuthService);

	ngOnInit(): void {
		this._authService.checkAuthStatus().subscribe((response: CheckStatusResponse) => {
			this.personal = response;
		});
	}

	logout() {
		this._authService.logout();
	}
}
