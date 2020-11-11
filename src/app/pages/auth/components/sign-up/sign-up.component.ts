import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(private _router: Router) {}

  submitUserSignUp(signUpForm) {
    let userList = JSON.parse(localStorage.getItem('userList')) || [];
    let user = userList.find((user) => user['email'] === signUpForm['email']);

    if (!user) {
      userList.push(signUpForm);
      localStorage.setItem('userList', JSON.stringify(userList));
      localStorage.setItem('userDetails', JSON.stringify(signUpForm));
      this._router.navigateByUrl('/dashboard');
    } else {
      alert('Sorry mate this user already exists try with other email id');
    }
  }
}
