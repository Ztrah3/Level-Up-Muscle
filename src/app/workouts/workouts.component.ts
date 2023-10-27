import { Component } from '@angular/core';
import { GenerateWorkoutCardService } from '../generate-workout-card.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent {
  constructor(public generateWorkoutCardService: GenerateWorkoutCardService) {}

  get workouts() {
    return this.generateWorkoutCardService.workouts;
  }
}
