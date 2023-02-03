import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './feature/articulo/components/list/list.component';
import { WeatherCaliComponent } from './feature/weather/components/weather-cali/weather-cali.component';

const routes: Routes = [
  
  {path: 'auth',loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'articulos', component: ListComponent},
  {path: 'articulos', loadChildren: ()=> import('./feature/articulo/articulo.module').then(m=>m.ArticuloModule)},
  {path: 'weather', loadChildren: () =>import('./feature/weather/weather.module').then(m =>m.WeatherModule) },
  {path: '', redirectTo:'auth', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
