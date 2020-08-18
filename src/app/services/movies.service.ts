import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class MoviesService {

    constructor(private http: HttpClient) { }

    moviesRequest(endPoint: string) {
        return this.http.get(`https://api.themoviedb.org/3/movie/${endPoint}?api_key=8673e8c11eae0b8c433a41602fd2ddfc`)
            .pipe(map((res: any) => res.results.map((movie: any) => ({ posterPath: `${movie.poster_path}` }))))
    }
}