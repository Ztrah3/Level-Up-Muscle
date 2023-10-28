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
  @ViewChild('exercise1') exercise1!: ElementRef;
  @ViewChild('exercise2') exercise2!: ElementRef;
  @ViewChild('exercise3') exercise3!: ElementRef;
  @ViewChild('exercise4') exercise4!: ElementRef;
  @ViewChild('exercise5') exercise5!: ElementRef;
  @ViewChild('exercise6') exercise6!: ElementRef;
  @ViewChild('workoutGoal') workoutGoal!: ElementRef;
  @ViewChild('cardio') cardio!: ElementRef;

  edit() {
    this.editWorkout.emit({
      workoutName: this.workoutName.nativeElement.value,
      exercises: [
        this.exercise1.nativeElement.value,
        this.exercise2.nativeElement.value,
        this.exercise3.nativeElement.value,
        this.exercise4.nativeElement.value,
        this.exercise5.nativeElement.value,
        this.exercise6.nativeElement.value
      ],
      workoutGoal: this.workoutGoal.nativeElement.value,
      cardio: this.cardio.nativeElement.value 
    });
    this.closeModal.emit();
    this.router.navigate(['/workouts']);
  }

  constructor(private router: Router) { }
}
