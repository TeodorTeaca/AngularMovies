import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class LocalStorage {

    getElement(element: string) {
        return localStorage.getItem(element);
    }

    setElement(name: string, element: string) {
        localStorage.setItem(name, element);
    }
}