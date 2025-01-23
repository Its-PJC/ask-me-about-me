import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // Your components here
  ],
  imports: [
    // Other Angular modules here
    MatInputModule,
    MatFormFieldModule, BrowserModule, ReactiveFormsModule
  ],
  providers: [],
})
export class AppModule { }
