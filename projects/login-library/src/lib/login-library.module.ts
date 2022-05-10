import { NgModule } from '@angular/core';
import { LoginLibraryComponent } from './login-library.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoginLibraryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginLibraryComponent
  ]
})
export class LoginLibraryModule { }
