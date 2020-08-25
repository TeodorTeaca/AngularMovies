import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { API_KEY, TMDB_URL } from '../constants';
import { LocalStorage } from './local-storage.service';
import { Injectable } from '@angular/core';

@Injectable()

export class Interceptor implements HttpInterceptor {
    constructor(private localStorage: LocalStorage) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const session = this.localStorage.getElement('session');
        if (req.url.startsWith('{REQUIRES_AUTH}')) {
            const new_req = req.url.slice(15);
            const followingUrl = req.clone({ url: `${TMDB_URL}${new_req}?api_key=${API_KEY}&session_id=${session}` });
            return next.handle(followingUrl);
        } else {
            const followingUrl = req.clone({ url: `${TMDB_URL}${req.url}?api_key=${API_KEY}` });
            return next.handle(followingUrl);
        }
    }
}
