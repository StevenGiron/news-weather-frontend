import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ArticuloComponent } from './components/articulo/articulo.component';

const routes:Routes = [
  {
    path:'',
    component: ArticuloComponent,
    children: [
      {
        path:'list',
        component: ListComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticuloRoutingModule { }
