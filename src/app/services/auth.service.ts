import { Injectable } from '@angular/core';
import { LocalStorage } from './local-storage.service';

@Injectable({ providedIn: 'root' })

export class AuthService {
    constructor(private localStorage: LocalStorage) { }

    isAuthenticated() {
        const session = this.localStorage.getElement('session');
        if (session === null) {
            return false;
        } else {
            return true;
        }
    }
}