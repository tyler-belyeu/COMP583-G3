import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '../signin/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit{
  form!: FormGroup;
  isRegistering = false;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
  ){ 
  }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required]],
      password2:['',[Validators.required]],
    }, { validators: passwordMismatchValidator() });
  }

  /* Called on each input in either password field */
  onPasswordInput() {
    if (this.form.hasError('passwordMismatch'))
      this.form.get('password2')!.setErrors([{'passwordMismatch': true}]);
    // else
    //   this.form.get('password2')!.setErrors(null);
  }

  register()
  {
    this.isRegistering = true;

    this.authenticationService.signUp({
      email: this.form.value.email,
      password: this.form.value.password
    }).subscribe(() => {
      this.router.navigate(['home'])
    }, (error: any) => {
      this.isRegistering = false;
      this.snackBar.open(error.message, "OK",{
        duration: 5000
      })
    });
  }

  goToSignIn()
  {
    this.router.navigate(['signin']);
  }
}

export function passwordMismatchValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {
      const form = control.value;
      const password = form['password'];
      const password2 = form['password2'];
      if (password === password2)
        return null;
      else
        return {passwordMismatch: true};
  }
}
