import { Component } from '@angular/core';
import { GenerateWorkoutCardService } from '../generate-workout-card.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent {
  editModalOpen = false;
  editIndex = -1;

  constructor(public generateWorkoutCardService: GenerateWorkoutCardService) {}

  get workouts() {
    return this.generateWorkoutCardService.workouts;
  }

  deleteWorkout(index: number) {
    this.generateWorkoutCardService.workouts.splice(index, 1);
  }

  openEditModal(index: number) {
    this.editModalOpen = true;
    this.editIndex = index;
  }
}
