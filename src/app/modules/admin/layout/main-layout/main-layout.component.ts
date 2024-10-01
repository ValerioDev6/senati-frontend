import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AuthService } from '../../../../core/services/common/auth.service';
import { CheckStatusResponse } from '../../../../core/interfaces/get-status.interface';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    RouterOutlet,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzInputModule,
    NzBadgeModule,
    NzAvatarModule,
    NzDropDownModule,
    CommonModule
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit{
  personal !:CheckStatusResponse;
  email: string = ''
  isCollapsed = false;
  private readonly _authService = inject(AuthService);
  userName = 'valerio'
  userRole = 'Administrador'
  ngOnInit(): void {
    this._authService.checkAuthStatus().subscribe((response: CheckStatusResponse) => {
      this.personal = response;
      this.email = response.email
    });
  }

  logout(){
    this._authService.logout()

  }
}
