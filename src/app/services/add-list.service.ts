import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ADD_LIST_PATH } from '../constants'
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class CreateList {
    constructor(private http: HttpClient) { }

    createListRequest(listName, listDescription) {
        return this.http.post(`${ADD_LIST_PATH}`, {
            name: listName,
            description: listDescription,
            language: "en",
        })
            .pipe(
                map((res: any) => res.list_id),
                catchError((error) => throwError(error))
            )

    }

}