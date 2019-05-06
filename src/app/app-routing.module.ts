import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RepositoriesComponent } from './repositories/repositories.component';


const routes: Routes = [
  {path: "landing", component: LandingComponent}
  ,{path: "repositories", component: RepositoriesComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
