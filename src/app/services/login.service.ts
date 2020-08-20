import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { TOKEN_URL, SESSION_URL, API_KEY } from './constants';

@Injectable({ providedIn: 'root' })

export class LoginService {

    constructor(private http: HttpClient) { }

    getToken() {
        return this.http.get(`${TOKEN_URL}`)
            .pipe(
                map((res: any) => res.request_token),
                catchError((error) => {
                    if (error.stauts === 401) {
                        return error.stauts;
                    } else {
                        throwError(error);
                    }
                })
            )
    }

    getSession(token) {
        return this.http.post(`${SESSION_URL}`, { request_token: token })
            .pipe(
                map((res: any) => res.session_id)

            )
    }


}