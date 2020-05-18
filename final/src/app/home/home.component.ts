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
            {id:  0,name: 'Ahmed Khurrum', relation: 'Base Node'},
            {id:  1,name: 'Kareem Khurrum', relation: 'Brother'},
            {id:  2,name: 'Sultan Khurrum', relation: 'Brother'},
            {id:  3,name: 'Azhar Khurrum', relation: 'Brother'},
            {id:  4,name: 'Faiz Ahmed ', relation: 'Son'},
            {id:  5,name: 'Hina Khurrum', relation: 'Wife'},
            {id:  6,name: 'Shugufta', relation: 'Mother'},
            {id:  7,name: 'Alina', relation: 'Mother-in-Law'},
            {id:  8,name: 'Khurrum Javed', relation: 'Father'},
            {id:  9,name: 'Zaid', relation: 'father-in-Law'},
            {id:  10,name: 'Sabiha', relation: 'Sister'},
            
            ]

    }

    updateList(id: number, property: string, event: any) {
      
        const editField = event;
        this.list[id][property] = editField;
      }

    remove(id: any) {
      console.log(id)
        //this.list.push(this.list[id]);
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