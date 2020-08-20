import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { API_KEY, TMDB_URL, TOKEN_URL, SESSION_URL } from './constants';

export class InterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (req.url.startsWith(`${TMDB_URL}`)) {
            const modifiedRequest = req.clone({ url: `${req.url}?api_key=${API_KEY}` });
            return next.handle(modifiedRequest);
        } else if (req.url.startsWith(`${TOKEN_URL}`)) {
            const modifiedRequest = req.clone({ url: `${req.url}?api_key=${API_KEY}` });
            return next.handle(modifiedRequest);
        }
    }
}