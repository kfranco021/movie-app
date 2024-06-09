import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesAPIService } from '../services/movies-api.service';

export interface filme {
  id: string;
  primaryImage: any;
  titleText: any;
  originalTitleTex: any;
  releaseYear: any;
  releaseDate: string | null;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  filmes: any;
  constructor(public moviesAPIService: MoviesAPIService) { }
  ngOnInit(): void {
    console.log('abcd')


    this.filmes = this.moviesAPIService.getFilmes().subscribe(
      (result: any) => {
        let resultados = result?.results
        this.filmes = resultados
        // resultados.forEach((filme: any) => {
        //   this.filmes.results.push(filme);
        // });

        console.log(this.filmes)
        this.filmes.forEach((filme: any) => {
          console.log(filme?.primaryImage?.url)
        
        });
      })
  }

}
