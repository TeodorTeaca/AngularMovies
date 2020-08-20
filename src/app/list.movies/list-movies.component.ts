import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Subscription } from 'rxjs';

interface PosterList {
  posterPath: string;
}

@Component({
  selector: 'list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css'],
  providers: [MoviesService]
})

export class ListMoviesComponent implements OnInit, OnDestroy {
  constructor(private moviesService: MoviesService) { }

  @Input() endpoint: string;
  public error: boolean = null;
  public posters: PosterList[];

  ngOnInit(): void {
    console.log('ENDOINT', this.endpoint);
    this.request = this.moviesService.moviesRequest(this.endpoint)
      .subscribe((posters: PosterList[]) => {
        console.log('POSTERS', posters);
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

  private request: Subscription;
}
