import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLibraryComponent, AuthGuard } from 'login-library';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'login', component: LoginLibraryComponent },
  { path: '', component: UsersComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
