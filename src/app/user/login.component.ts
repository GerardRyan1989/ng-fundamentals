import {Component, forwardRef, Inject} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {
  userName: string;
  password: string;

  constructor(@Inject(forwardRef(() => AuthService)) private authService: AuthService,
              @Inject(forwardRef(() => Router)) private router: Router) {

  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
