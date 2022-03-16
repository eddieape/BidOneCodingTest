import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    FirstName: string;
    InvalidateFirstName: boolean;

    LastName: string;
    InvalidateLastName: boolean;

    constructor() { }

    ngOnInit(): void {
        this.FirstName = "";
        this.LastName = "";
        this.InvalidateFirstName = false;
        this.InvalidateLastName = false;
    }

    savePersonalInfo() {
        var fn = this.FirstName.trim();
        if (fn.length == 0) {
            this.InvalidateFirstName = true;
            return;
        } else {
            this.InvalidateFirstName = false;
        }

        var ln = this.LastName.trim();
        if (ln.length == 0) {
            this.InvalidateLastName = true;
            return;
        } else {
            this.InvalidateLastName = false;
        }

        var val = {
            FirstName: fn,
            LastName: ln
        };

    }
}
