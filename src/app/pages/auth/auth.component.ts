import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor(private _router: Router) {
    const token = localStorage.getItem('token');
    if (token) {
      this._router.navigateByUrl('/dashboard/product-list');
    } else {
      this._router.navigateByUrl('/auth/sign-up');
    }
  }
}
