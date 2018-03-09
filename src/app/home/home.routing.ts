import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';

const routesHome: Routes = [
  {
    path:'',
    component: HomeComponent
  }
];

export const routingHome = RouterModule.forChild(routesHome);
