import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { MOVIE_PATH, IMAGE_URL } from '../constants';
import { throwError } from 'rxjs';
import { PostersRes } from '../constants';
// import { ApiError } from './api-error';

@Injectable({ providedIn: 'root' })

export class MoviesService {
    constructor(private http: HttpClient) { }

    moviesRequest(category: string) {
        return this.http.get(`{REQUIRES_AUTH}${MOVIE_PATH}${category}`)
            .pipe(
                map((res: PostersRes) => res.results
                    .map((res) => ({ posterPath: `${IMAGE_URL}${res.poster_path}` }))
                )
            )
    }
}