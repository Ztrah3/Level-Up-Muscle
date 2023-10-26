import { Component } from '@angular/core';
import { GenerateWorkoutCardService } from '../generate-workout-card.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent {
  workouts: { name: string, exercises: string[] }[] = [];

  constructor(private generateWorkoutCardService: GenerateWorkoutCardService) {
    this.workouts = this.generateWorkoutCardService.workouts;
  }
}
