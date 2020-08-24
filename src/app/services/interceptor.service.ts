import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { API_KEY, TMDB_URL } from '../constants';
import { LocalStorage } from '../services/local-storage.service';
import { Injectable } from '@angular/core';

@Injectable()

export class InterceptorService implements HttpInterceptor {
    constructor(private localStorage: LocalStorage) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const session = this.localStorage.getElement('session');
        if (req.url.startsWith('list')) {
            const upcomingUrl = req.url;
            const followingUrl = req.clone({ url: `${TMDB_URL}${upcomingUrl}${API_KEY}&session_id=${session}` });
            return next.handle(followingUrl);
        } else if (req.url.startsWith('movie') || (req.url.startsWith('authentication'))) {
            const upcomingUrl = req.url;
            const followingUrl = req.clone({ url: `${TMDB_URL}${upcomingUrl}${API_KEY}` });
            return next.handle(followingUrl);
        } else {
            return next.handle(req);
        }
    }
}
