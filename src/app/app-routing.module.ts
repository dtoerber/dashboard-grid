import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  DashboardComponent,
  PieChartComponent,
  LineChartComponent,
  MaterialCardComponent,
  BarChartComponent,
  DynamicChartComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'pie',
    component: PieChartComponent,
  },
  {
    path: 'line',
    component: LineChartComponent,
  },
  {
    path: 'bar',
    component: BarChartComponent,
  },
  {
    path: 'dynamic',
    component: DynamicChartComponent,
  },
  {
    path: 'card',
    component: MaterialCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
