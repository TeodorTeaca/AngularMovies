import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { TMDB_URL, API_KEY } from './constants';
import { throwError } from 'rxjs';

const imageUrl: string = 'https://image.tmdb.org/t/p/w500';

interface Posters {
    results: { poster_path: string }[];
}

@Injectable({ providedIn: 'root' })

export class MoviesService {
    constructor(private http: HttpClient) { }
    moviesRequest(category: string) {
        return this.http.get(`${TMDB_URL}movie/${category}`)
            .pipe(
                map((res: Posters) => res.results
                    .map((res) => res.poster_path)
                    .map((res) => ({ posterPath: `${imageUrl}${res}` }))
                ),
                catchError((error) => {
                    if (error.stauts === 401) {
                        return error.stauts;
                    } else {
                        throwError(error);
                    }
                })
            )
    }
}