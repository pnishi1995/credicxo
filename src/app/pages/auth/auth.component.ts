import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor(private _router: Router) {
    // Ideally this should be handled via auth guard
    const userDetails = localStorage.getItem('userDetails');
    if (userDetails) {
      this._router.navigateByUrl('/dashboard');
    } else {
      this._router.navigateByUrl('/auth/login');
    }
  }
}
