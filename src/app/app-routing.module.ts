import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path:'', component: AppComponent },
  { path:'about', component: AboutComponent },
  { path: 'container-profile', 
    loadChildren: () => import('./components/profile/container-profile.module').then(m => m.ContainerProfileModule) 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
