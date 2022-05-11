import { NgModule } from '@angular/core';
import { LoginLibraryComponent } from './login-library.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginLibraryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginLibraryComponent
  ]
})
export class LoginLibraryModule { }
