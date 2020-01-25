import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// components
import { HomePageComponent } from './home-page.component';

// modules
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomePageRoutingModule]
})
export class HomePageModule {}
