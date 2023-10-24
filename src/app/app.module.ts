import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelsComponent } from './panels/panels.component';
import { TitleComponent } from './title/title.component';
import { ModalComponent } from './modal/modal.component';
import { WorkoutCardComponent } from './workout-card/workout-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelsComponent,
    TitleComponent,
    ModalComponent,
    WorkoutCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
