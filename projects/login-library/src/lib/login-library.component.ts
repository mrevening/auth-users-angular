import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'lib-login-library',
  templateUrl: './login-library.component.html',
  styles: [
  ]
})
export class LoginLibraryComponent {
  message: string;
  userValue: string;
  heroForm: FormGroup;

  constructor(public authService: AuthService, public router: Router) {
    this.message = this.getMessage();
    this.userValue = "";
    this.heroForm = new FormGroup({
      name: new FormControl(this.userValue, [
        Validators.required,
        Validators.pattern('[a-zA-Z1-9_-]*')
      ])
    });
  }

  getMessage() {
    return 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login(loginValue: string) {
    this.message = 'Trying to log in ...';

    this.authService.login(loginValue).subscribe(() => {
      this.message = this.getMessage();
      if (this.authService.isLoggedIn) {
        // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/`.
        const redirectUrl = this.authService.redirectUrl

        // Redirect the user
        this.router.navigate([redirectUrl]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.message = this.getMessage();
  }
}