import { Component, EventEmitter, Output, ViewChild, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {
  @Input() workout: any;
  @Output() closeModal = new EventEmitter<void>();
  @Output() editWorkout = new EventEmitter<any>();

  @ViewChild('workoutName') workoutName!: ElementRef;
  @ViewChild('workoutGoal') workoutGoal!: ElementRef;
  @ViewChild('cardio') cardio!: ElementRef;

  edit() {
    const editedWorkout = {
      workoutName: this.workoutName.nativeElement.value,
      workoutGoal: this.workoutGoal.nativeElement.value,
      cardio: this.cardio.nativeElement.value 
    };

    this.editWorkout.emit(editedWorkout);
    this.closeModal.emit();
    this.router.navigate(['/workouts']);
}

  constructor(private router: Router) { }
}
