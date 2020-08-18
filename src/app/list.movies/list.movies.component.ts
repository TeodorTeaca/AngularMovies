import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Subscription, interval, Observable } from 'rxjs';

@Component({
  selector: 'list-movies',
  templateUrl: './list.movies.component.html',
  styleUrls: ['./list.movies.component.css'],
  providers: [MoviesService]
})

export class ListMoviesComponent implements OnInit, OnDestroy {

  constructor(private moviesService: MoviesService) { }

  @Input() endpoint: string;
  private request: Subscription;
  public posters: object[];

  ngOnInit(): void {
    console.log(this.endpoint);
    this.request = this.moviesService.moviesRequest(this.endpoint)
      .subscribe((posters) => {
        console.log(posters);
        this.posters = posters;
      });
  }

  ngOnDestroy(): void {
    this.request.unsubscribe();
  }

}
