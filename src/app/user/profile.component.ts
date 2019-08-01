import {Component, forwardRef, Inject, Injectable, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService} from './auth.service';
import { Router} from '@angular/router';

@Component({
  templateUrl: './profile.component.html'
})

@Injectable()
export class ProfileComponent implements OnInit {

  constructor(@Inject(forwardRef(() => Router))private router: Router, @Inject(forwardRef(() => AuthService)) private authService: AuthService) {

  }

  profileForm: FormGroup;
  ngOnInit() {
      const firstName = new FormControl(this.authService.currentUser.firstName);
      const lastName = new FormControl(this.authService.currentUser.lastName);
      this.profileForm = new FormGroup({
        firstName,
        lastName
      });


  }

  cancel() {
        this.router.navigate(['events']);
  }

  saveProfile(formValues) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(['events']);
  }
}
