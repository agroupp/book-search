import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './layout/sign-in/sign-in.component';

const routes: Routes = [
  {path: 'sign-in', component: SignInComponent},
  {path: '', redirectTo: 'search', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
