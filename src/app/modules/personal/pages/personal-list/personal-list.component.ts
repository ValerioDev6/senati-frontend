import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTableModule, NzTableQueryParams } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PersonalService } from '../../../../core/services/personal.service';
import { IPersonalResponse, Personal } from '../../../../core/interfaces/personal.interface';
@Component({
  selector: 'app-personal-list',
  standalone: true,
  imports: [
    JsonPipe,
    CommonModule,
    RouterModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzTableModule,
    NzPaginationModule,
    NzFormModule,
    NzLayoutModule,
    NzToolTipModule,
    NzSelectModule,
    FormsModule,
    NzDropDownModule,
    NzDividerModule,
  ],
  templateUrl: './personal-list.component.html',
  styleUrl: './personal-list.component.scss'
})
export default class PersonalListComponent implements OnInit{

  private readonly _personalService = inject(PersonalService)

  personal : Personal[] = [];
  loading = false;
  search: string = ''

  ngOnInit(): void {
    this.loadDataPersonal();
  }


  loadDataPersonal(): void {
    this.loading = true;
    this._personalService.getPersonalData().subscribe({
      next: (response: IPersonalResponse) => {
        this.personal = response.personal;
        this.loading = false;
        console.log(response);

      },
      error: (err) => {
        console.error('Error al cargar datos personales', err);
        this.loading = false
      }
    });
  }

  searchTo() {

  }
}
