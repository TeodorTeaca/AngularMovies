import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { MOVIE_PATH } from '../constants';
import { throwError } from 'rxjs';
import { PostersRes } from '../constants';

const imageUrl: string = 'https://image.tmdb.org/t/p/w500';

@Injectable({ providedIn: 'root' })

export class MoviesService {
    constructor(private http: HttpClient) { }

    moviesRequest(category: string) {
        const path: string = `${MOVIE_PATH}${category}`;
        return this.http.get(path)
            .pipe(
                map((res: PostersRes) => res.results
                    .map((res) => res.poster_path)
                    .map((res) => ({ posterPath: `${imageUrl}${res}` }))
                ),
                catchError((err) => throwError(err))
            )
    }
}