import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import {
	MenuFoldOutline,
	MenuUnfoldOutline,
	FormOutline,
	DashboardOutline,
	SettingOutline,
	ArrowLeftOutline,
	LogoutOutline,
	HomeOutline,
	EyeOutline,
	EditOutline,
	SearchOutline,
	DatabaseOutline,
	DeleteOutline,
	FolderOutline,
	TeamOutline,
	SaveOutline,
} from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';

const icons = [
	MenuFoldOutline,
	MenuUnfoldOutline,
	DashboardOutline,
	FormOutline,
	SettingOutline,
	ArrowLeftOutline,
	LogoutOutline,
	HomeOutline,
	EyeOutline,
	EditOutline,
	SearchOutline,
	DatabaseOutline,
	DeleteOutline,
	FolderOutline,
	TeamOutline,
	SaveOutline,
];
export function provideNzIcons(): EnvironmentProviders {
	return importProvidersFrom(NzIconModule.forRoot(icons));
}
