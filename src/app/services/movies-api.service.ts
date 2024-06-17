import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


export interface apiResult {
  page: number;
  next: string;
  entries: number;
  results: any;
}


@Injectable({
  providedIn: 'root'
})
export class MoviesAPIService {



  constructor(private http: HttpClient) { }
  getFilmes(): Observable<any> {
    return this.http.get<apiResult>(
      `https://moviesdatabase.p.rapidapi.com/titles?sort=year.decr&list=top_boxoffice_200`,
      {
        headers: new HttpHeaders({
          'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com',
          'x-rapidapi-key': '563ab85cfdmsh9bc7a7f1eeb6af9p14ba12jsne4312b956f61'
        })
      }
    ).pipe(
      catchError(error => {
          console.error('Ocorreu um erro na requisição:', error);
          return throwError(error);
      })
  );
  }

  getSearchMovies(name: string, page: number): Observable<apiResult> {
    return this.http.get<apiResult>(
      `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=pt-BR&api_key=dadc0c005ef5db978255b26bb089a811&page=${page}`
    );
  }

  // getProviders(id: string): Observable<any> {
  //   return this.http.get<apiResult>(
  //     `https://api.themoviedb.org/3/movie/${id}/watch/providers`,
  //     {
  //       headers: new HttpHeaders({
  //         'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmM5MzVmNDAxZTJhNDVlMDM3NjExNDMwODNkYWFmOSIsInN1YiI6IjY2M2Y4MjM5MTgwYjBkZDllOGI2MjA1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cnygjS1KEPLff4KyZyUGwGV3DSF7iN0PUYx_Oy50TSA'
  //       })
  //     }
  //   );
  // }

  getDetails(id: string): Observable<apiResult> {
    return this.http.get<apiResult>(
      `https://api.themoviedb.org/3/movie/${id}?language=pt-br`,
      {
        headers: new HttpHeaders({
          'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmM5MzVmNDAxZTJhNDVlMDM3NjExNDMwODNkYWFmOSIsInN1YiI6IjY2M2Y4MjM5MTgwYjBkZDllOGI2MjA1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cnygjS1KEPLff4KyZyUGwGV3DSF7iN0PUYx_Oy50TSA'
        })
      }
    );
  }

  getCredits(id: string): Observable<apiResult> {
    return this.http.get<apiResult>(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=pt-br`,
      {
        headers: new HttpHeaders({
          'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmM5MzVmNDAxZTJhNDVlMDM3NjExNDMwODNkYWFmOSIsInN1YiI6IjY2M2Y4MjM5MTgwYjBkZDllOGI2MjA1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cnygjS1KEPLff4KyZyUGwGV3DSF7iN0PUYx_Oy50TSA'
        })
      }
    );
  }

  getVideo(id: string): Observable<apiResult> {
    return this.http.get<apiResult>(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=pt-br`,
      {
        headers: new HttpHeaders({
          'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmM5MzVmNDAxZTJhNDVlMDM3NjExNDMwODNkYWFmOSIsInN1YiI6IjY2M2Y4MjM5MTgwYjBkZDllOGI2MjA1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cnygjS1KEPLff4KyZyUGwGV3DSF7iN0PUYx_Oy50TSA'
        })
      }
    );
  }

  getRecomendacao(id: string): Observable<apiResult> {
    return this.http.get<apiResult>(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?language=pt-br&page=1`,
      {
        headers: new HttpHeaders({
          'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmM5MzVmNDAxZTJhNDVlMDM3NjExNDMwODNkYWFmOSIsInN1YiI6IjY2M2Y4MjM5MTgwYjBkZDllOGI2MjA1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cnygjS1KEPLff4KyZyUGwGV3DSF7iN0PUYx_Oy50TSA'
        })
      }
    );
  }

  getPopularMovies(page: number): Observable<apiResult> {
    return this.http.get<apiResult>(
      `https://api.themoviedb.org/3/movie/popular?language=pt-BR&api_key=dadc0c005ef5db978255b26bb089a811&page=${page}`
    );
  }

  getDiscoverMovies(page: number): Observable<apiResult> {
    return this.http.get<apiResult>(
      `https://api.themoviedb.org/3/discover/movie?language=pt-BR&api_key=dadc0c005ef5db978255b26bb089a811&page=${page}`
    );
  }
  getPagesData(): Observable<any> {
    const page1$ = this.getDiscoverMovies(1);
    const page2$ = this.getDiscoverMovies(2);
    const page3$ = this.getDiscoverMovies(3);

    return forkJoin<any>([page1$, page2$, page3$]).pipe(
      map(results => {
        // Aqui você pode manipular os resultados, se necessário
        return results;
      })
    );


    //Isso é outra coisa não usada
    //isso pega o LINK de um filme, passando o ID. Então pode fazer uma parte mais detalhadas desse filmes
    //  getMovieDetails(id: String)
    //  {
    //    return this.http.get(
    //      `https://api.themoviedb.org/movie/${id}?api_key=${environment.apiKey}`)
    //  }


  }
}