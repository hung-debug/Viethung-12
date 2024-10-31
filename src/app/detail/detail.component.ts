
import { Component } from '@angular/core';
import { MovieService} from '../service/movies.services';
import { Movie } from '../shared/movies.interface';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
  })
  export class DetailComponent {
    movie: Movie | null = null;

  constructor(private movieService: MovieService) { }
  loadMovieDetail(movieId: number) {
    this.movieService.getMovieDetail(movieId).subscribe({
      next: (detail) => {
        this.movie = detail;
        console.log('Movie Detail:', detail);
      },
      error: (error) => console.error('Error loading movie detail:', error)
    });
  
  
  
  }


}