import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private _router: Router) {}

  /**
   * this function is user to make user to login
   * @param loginForm this is user credentials filled by user
   */
  makeUserLogin(loginForm) {
    let userList = JSON.parse(localStorage.getItem('userList'));
    let userDetails = userList.find((user) => user.email === loginForm.email);
    if (userDetails) {
      if (userDetails.password === loginForm.password) {
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        this._router.navigateByUrl('/dashboard');
      } else {
        // ideally will be using ng-toaster, used alert due to time contraint
        alert('incorrect password please try again');
      }
    } else {
      // ideally will be using ng-toaster, used alert due to time contraint
      alert('this user does not exist');
    }
  }
}
