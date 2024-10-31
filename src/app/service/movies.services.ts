// movies/movie.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Movie } from '../shared/movies.interface';

const apiUrl = environment.apiUrl;
const apiKey = environment.apiKey;


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private http = inject(HttpClient);
  constructor(){}

  getPopularMovies(): Observable<Movie>{
    return this.http.get<Movie>(`${apiUrl}?api_key=${apiKey}`);
  }

  getMovieDetail(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(`${apiUrl}/movie/${movieId}?api_key=${apiKey}`);
  }
  
}
