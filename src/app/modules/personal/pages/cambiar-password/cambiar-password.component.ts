import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-cambiar-password',
	standalone: true,
	imports: [ReactiveFormsModule, CommonModule, FormsModule],
	templateUrl: './cambiar-password.component.html',
	styleUrl: './cambiar-password.component.scss',
})
export default class CambiarPasswordComponent {
	passwordForm: FormGroup;
	showOldPassword = false;
	showNewPassword = false;
	showConfirmPassword = false;

	constructor(private fb: FormBuilder) {
		this.passwordForm = this.fb.group(
			{
				oldPassword: ['', [Validators.required]],
				newPassword: ['', [Validators.required, Validators.minLength(8)]],
				confirmPassword: ['', [Validators.required]],
			},
			{
				validator: this.passwordMatchValidator,
			}
		);
	}

	passwordMatchValidator(g: FormGroup) {
		return g.get('newPassword')?.value === g.get('confirmPassword')?.value ? null : { mismatch: true };
	}

	onSubmit() {
		if (this.passwordForm.valid) {
			// Implementar lógica de cambio de contraseña
			console.log('Form submitted', this.passwordForm.value);
		}
	}
}
