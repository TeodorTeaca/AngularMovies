import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { TOKEN_PATH, SESSION_PATH } from '../constants';

@Injectable({ providedIn: 'root' })

export class LoginService {
    constructor(private http: HttpClient) { }

    getTokenRequest() {
        return this.http.get(`${TOKEN_PATH}`)
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

    getSessionRequest(token) {
        return this.http.post(`${SESSION_PATH}`, { request_token: token })
            .pipe(
                map((res: any) => res.session_id),
                catchError((error) => throwError(error))
            )
    }

}