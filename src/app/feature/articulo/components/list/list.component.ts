import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../../shared/service/articulo.service';
import { Articulo } from '../../shared/models/articulo';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  articulos: Articulo[] = []

  constructor(private articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.articuloService.list()
      .subscribe((articulos)=>{
        this.articulos = articulos
      })
  }

  list(){
    
  }

}
