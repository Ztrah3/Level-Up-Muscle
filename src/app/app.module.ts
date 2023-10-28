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
import { EditModalComponent } from './edit-modal/edit-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelsComponent,
    TitleComponent,
    ModalComponent,
    WorkoutCardComponent,
    WorkoutsComponent,
    HomePageComponent,
    EditModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
