import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';

const routes: Routes = [
  {path:'Top',component:DashboardComponent},
  {path:'Heroes',component:HeroesComponent},
  {path: '**',pathMatch:'full',redirectTo: 'Top'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
