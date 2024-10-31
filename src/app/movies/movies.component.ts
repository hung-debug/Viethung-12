import { Router } from '@angular/router'; 
import { Component,OnInit } from '@angular/core';
import { MovieService} from '../service/movies.services';
import { Movie } from '../shared/movies.interface';
import { error } from 'console';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
  })
  export class MovieComponent implements OnInit {
    popularMovies: Movie[] = [];


  
    constructor(private movieService: MovieService,private router: Router) {}
    searchQuery: string = '';
    onClick() {
      this.router.navigate(['/login']);
    }
    onSearch() {
      console.log(this.searchQuery);
    }
    
    ngOnInit(): void {
      this.loadMovies();
    }
  
    loadMovies(){
      this.movieService.getPopularMovies().subscribe({
        next :(res:any)=>{
          this.popularMovies =res.results as Movie[];
          console.log(res.results);
        },
        error:(error)=> console.log('error movies',error)
      });
     }
}