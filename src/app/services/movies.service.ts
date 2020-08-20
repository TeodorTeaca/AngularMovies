import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

const imageURL: string = 'https://image.tmdb.org/t/p/w500';

interface Posters {
    results: { poster_path: string }[];
}

@Injectable({ providedIn: 'root' })

export class MoviesService {
    constructor(private http: HttpClient) { }
    moviesRequest(endPoint: string) {
        return this.http.get(`${endPoint}`)
            .pipe(
                map((res: Posters) => res.results
                    .map((res) => res.poster_path)
                    .map((res) => ({ posterPath: `${imageURL}${res}` })))
            )
    }
}