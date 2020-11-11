import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private _router: Router) {}

  makeUserLogin(loginForm) {
    let userList = JSON.parse(localStorage.getItem('userList'));
    let userDetails = userList.find((user) => user.email === loginForm.email);
    if (userDetails) {
      if (userDetails.password === loginForm.password) {
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        this._router.navigateByUrl('/dashboard');
      } else {
        alert('incorrect password please try again');
      }
    } else {
      alert('this user does not exist');
    }
  }
}
