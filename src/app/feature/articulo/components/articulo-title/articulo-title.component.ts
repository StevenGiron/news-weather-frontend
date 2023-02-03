import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../shared/models/articulo';

@Component({
  selector: 'app-articulo-title',
  templateUrl: './articulo-title.component.html',
  styleUrls: ['./articulo-title.component.css']
})
export class ArticuloTitleComponent implements OnInit {
  
  articulo: Articulo={
    author     : '',
    descripcion: '',
    title      : '',
    urlToImage : '',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
