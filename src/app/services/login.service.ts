import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { TOKEN_PATH, SESSION_PATH, TokenRes, SessionRes } from '../constants';

@Injectable({ providedIn: 'root' })

export class LoginService {
    constructor(private http: HttpClient) { }

    getTokenRequest() {
        return this.http.get(`${TOKEN_PATH}`)
            .pipe(
                map((res: TokenRes) => res.request_token)
            )
    }

    getSessionRequest(token) {
        return this.http.post(`${SESSION_PATH}`, { request_token: token })
            .pipe(
                map((res: SessionRes) => res.session_id)
            )
    }
}