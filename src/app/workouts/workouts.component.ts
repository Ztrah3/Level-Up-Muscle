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
  
  editWorkout(editedWorkout: any) {
    const workout = this.generateWorkoutCardService.workouts[this.editIndex];
    const muscleGroup = workout.name.toLowerCase(); // assuming the muscle group is the same as the workout name

    // Regenerate the exercises array based on the edited workout goal and cardio
    const compoundExercises = this.generateWorkoutCardService.getRandomExercises(this.generateWorkoutCardService.componentExercises[muscleGroup], 3);
    const isolatedExercises = this.generateWorkoutCardService.getRandomExercises(this.generateWorkoutCardService.isolatedExercises[muscleGroup], 3);

    let prefix = '';
    switch(editedWorkout.workoutGoal) {
      case 'Increase Muscle':
        prefix = '4 sets x 8-12 reps ';
        break;
      case 'Increase Strength':
        prefix = '4 sets x 6-8 reps ';
        break;
      case 'Lean up':
        prefix = '4 sets x 12-15 reps ';
        break;
    }

    const exercises = [...compoundExercises, ...isolatedExercises].map(exercise => prefix + exercise);

    if (editedWorkout.cardio === 'Yes') {
      const cardioExercise = this.generateWorkoutCardService.getRandomExercises(this.generateWorkoutCardService.componentExercises['cardio'], 1);
      exercises.push(...cardioExercise);
    } else if (exercises.length === 7) {
      // Remove the last exercise if it's a cardio exercise
      exercises.pop();
    }

    // Update the workout
    this.generateWorkoutCardService.workouts[this.editIndex] = {
      ...workout,
      name: editedWorkout.workoutName,
      workoutGoal: editedWorkout.workoutGoal,
      cardio: editedWorkout.cardio,
      exercises: exercises
    };

    this.editModalOpen = false;
  }
}
