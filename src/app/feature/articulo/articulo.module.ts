import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './components/list/list.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { ArticuloRoutingModule } from './articulo-routing.module';
// import { SharedModule } from 'primeng-lts/api';
import { ArticuloTitleComponent } from './components/articulo-title/articulo-title.component';
import { CoreModule } from '../../core/core.module';




@NgModule({
  declarations: [
    ListComponent, 
    ArticuloComponent, 
    ArticuloTitleComponent,
  ],
  imports: [
    CommonModule,
    ArticuloRoutingModule,
    // SharedModule,
    CoreModule,
    
  ]
})
export class ArticuloModule { }
