import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Articulo } from '../../shared/models/articulo';
import { ArticuloService } from '../../shared/service/articulo.service';

@Component({
  selector: 'app-articulo-title',
  templateUrl: './articulo-title.component.html',
  styleUrls: ['./articulo-title.component.css']
})
export class ArticuloTitleComponent implements OnInit {
  
  articulo: Articulo={
    author     : '',
    content    : '',
    description: '',
    title      : '',
    urlToImage : '',
  }

  articulos: Articulo[]=[]

  title!: string;

  constructor(private articuloService: ArticuloService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { 
               
                
              }

  ngOnInit(): void {
    this.title = String(this.activatedRoute.snapshot.paramMap.get("title"));
    if (this.title) this.getArticuloByTitle(this.title)
  }

  getArticuloByTitle(title:string){
    this.articuloService.getByTitle(title)
      .subscribe((articulos)=>{
        this.articulos = articulos
      })
      console.log(this.articulos);
      
  }

}
