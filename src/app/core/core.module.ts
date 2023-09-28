import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CarResolve } from '../cars/car-resolve.service';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent
  ],
  providers: [CarResolve]
})
export class CoreModule { }
