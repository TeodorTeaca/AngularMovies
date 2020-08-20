import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Subscription } from 'rxjs';

interface Poster {
  posterPath: string;
}

@Component({
  selector: 'list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css'],
  providers: [MoviesService]
})

export class ListMoviesComponent implements OnInit, OnDestroy {

  @Input() category: string;
  public error: boolean;
  public posters: Poster[];
  private request: Subscription;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.request = this.moviesService.moviesRequest(this.category)
      .subscribe((posters: Poster[]) => {
        this.posters = posters;
      },
        error => {
          this.error = error.error.status_message;
        }
      );
  }

  ngOnDestroy(): void {
    this.request.unsubscribe();
  }

}
