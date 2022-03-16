import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    public baseUrl: string;

    constructor(private http: HttpClient, @Inject('BASE_URL') _baseUrl: string) {
        this.baseUrl = _baseUrl;
    }

    savePersonalInfo(val: any) {
        return this.http.post(this.baseUrl + "api/profile", val);
    }
}
