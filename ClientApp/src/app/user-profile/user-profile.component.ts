import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';


@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    public SubmitResult: any;

    FirstName: string;
    InvalidateFirstName: boolean;

    LastName: string;
    InvalidateLastName: boolean;


    Status: boolean;

    constructor(private service: SharedService) {
    }

    ngOnInit(): void {
        this.FirstName = "";
        this.LastName = "";
        this.InvalidateFirstName = false;
        this.InvalidateLastName = false;
    }

    changeValue(event) {
        this.Status = false;
        this.SubmitResult = null;
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

        this.service.savePersonalInfo(val).subscribe(data => {

            this.SubmitResult = data;
            if (this.SubmitResult.status == 0) {
                this.Status = true;
            } else {
                this.Status = false;
            }

        });
    }
}
