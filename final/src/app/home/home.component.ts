import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { Router } from '@angular/router';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({ 
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styles: ['./home.component.css']

})
export class HomeComponent {
    loading = false;
    editField: string;
    users: User[];
    date: any;
    data: any;
    onEdit: boolean = false;
    list: Array<any>;

    constructor(private userService: UserService,
      private router: Router,
      private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.loading = true;
        this.date = new Date();
        this.data = JSON.parse(localStorage.getItem("currentUser"));

        this.list = [
            {name: 'Ahmed Khurrum', relation: 'Base Node'},
            {name: 'Kareem Khurrum', relation: 'Brother'},
            {name: 'Sultan Khurrum', relation: 'Brother'},
            {name: 'Azhar Khurrum', relation: 'Brother'},
            {name: 'Faiz Ahmed ', relation: 'Son'},
            {name: 'Hina Khurrum', relation: 'Wife'},
            {name: 'Shugufta', relation: 'Mother'},
            {name: 'Alina', relation: 'Mother-in-Law'},
            {name: 'Khurrum Javed', relation: 'Father'},
            {name: 'Zaid', relation: 'father-in-Law'},
            {name: 'Sabiha', relation: 'Sister'},
            
            ]

    }

    updateList(id: number, property: string, event: any) {
        const editField = event.target.textContent;
        this.list[id][property] = editField;
      }

    remove(id: any) {
        this.list.push(this.list[id]);
        this.list.splice(id, 1);
      }

      changeValue(id: number, property: string, event: any) {
        this.editField = event.target.textContent;
      }
    
      onEditClicked(rowNum, rowData){
          alert(rowNum)
      }

      logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}