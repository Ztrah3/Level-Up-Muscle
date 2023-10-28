import { Component } from '@angular/core';
import { GenerateWorkoutCardService } from '../generate-workout-card.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  showModal = false;

  
  constructor(private generateWorkoutCardService: GenerateWorkoutCardService) {}

  onGenerateWorkout(event: any) {
    this.generateWorkoutCardService.generate(event.workoutName, event.muscleGroup, event.workoutGoal, event.cardio);
  }
}
