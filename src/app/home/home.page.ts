import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('scrollableFilmes') scrollableFilmes!: ElementRef;
  filmes: any;
  constructor(public moviesAPIService: MoviesAPIService, public router: Router) { }

  ngAfterViewInit() {
    this.scrollableFilmes.nativeElement.addEventListener('scroll', (event: CustomEvent) => {
      let element = this.scrollableFilmes.nativeElement;
      console.log('biluga')

    })
  }


  ngOnInit(): void {
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

  navegar(rota: string) {
    this.router.navigate([rota]);
  }

}
