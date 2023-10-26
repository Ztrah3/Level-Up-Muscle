import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() generateWorkout = new EventEmitter<any>();

  @ViewChild('workoutName') workoutName!: ElementRef;
  @ViewChild('muscleGroup') muscleGroup!: ElementRef;

  generate() {
    this.generateWorkout.emit({
      workoutName: this.workoutName.nativeElement.value,
      muscleGroup: this.muscleGroup.nativeElement.value
    });
    this.closeModal.emit();
    this.router.navigate(['/workouts']);
  }

  constructor(private router: Router) { }
}
