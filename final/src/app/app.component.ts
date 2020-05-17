import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;
    date: any;
    data: any;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

        this.date = new Date();
        this.data = JSON.parse(localStorage.getItem("currentUser"));
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}