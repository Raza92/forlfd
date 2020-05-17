import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({ 
    templateUrl: 'list.component.html',
    styles: ['./list.component.css']

})
export class ListComponent {
    loading = false;

    
    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        
    }
}