import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Subscription, interval, Observable } from 'rxjs';

@Component({
  selector: 'list-movies',
  templateUrl: './list.movies.component.html',
  styleUrls: ['./list.movies.component.css'],
  providers: [MoviesService]
})

export class ListMoviesComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  // image = 'http://image.tmdb.org/t/p/original/fjCezXiQWfGuNf4t7LruKky7kwV.jpg';

  private request: Subscription;

  ngOnInit(): void {
    this.request = this.moviesService.moviesRequest('popular')
      .subscribe((movies) => {
        console.log(movies);
      });
  }

  ngOnDestroy(): void {
    this.request.unsubscribe();
  }


}
