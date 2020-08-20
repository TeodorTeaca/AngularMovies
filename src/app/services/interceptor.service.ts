import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class InterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const api_key: string = '?api_key=8673e8c11eae0b8c433a41602fd2ddfc';
        const tmdbURL: string = 'https://api.themoviedb.org/3/movie/'
        const endpoint = req.url;
        const modifiedRequest = req.clone({ url: `${tmdbURL}${endpoint}${api_key}` });
        return next.handle(modifiedRequest).pipe(tap(event => {
            console.log("EVENT", event);
        }));
    }
}