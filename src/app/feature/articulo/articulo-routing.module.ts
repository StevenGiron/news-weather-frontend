import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { ArticuloTitleComponent } from './components/articulo-title/articulo-title.component';

const routes:Routes = [
  {
    path:'',
    children: [
      {
        path:'list',
        component: ListComponent
      },
      {
        path:'news/:title',
        component: ArticuloTitleComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      },
    ]
  }
  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticuloRoutingModule { }
