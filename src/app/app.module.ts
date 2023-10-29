import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelsComponent } from './panels/panels.component';
import { TitleComponent } from './title/title.component';
import { ModalComponent } from './modal/modal.component';
import { WorkoutCardComponent } from './workout-card/workout-card.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelsComponent,
    TitleComponent,
    ModalComponent,
    WorkoutCardComponent,
    WorkoutsComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
