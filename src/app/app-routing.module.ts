import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/views/home/home.components';
import { PriceComponent } from './components/views/price/price.component';
import { PlanningComponent } from './components/views/planning/planning.component';
const routes: Routes = [  
  { path: '', component: HomeComponent },

// {
//   path: '**',
//   redirectTo: ''
// },
{ path: 'price', component: PriceComponent },

{ path: 'planning',  component: PlanningComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
