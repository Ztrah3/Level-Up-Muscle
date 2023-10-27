import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerateWorkoutCardService {
  componentExercises: { [key: string]: string[] } = { 
    chest: ["Bench press (barbell or dumbbell)", "Incline bench press (barbell  or dumbbell)", "Decline bench press (barbell or dumbbell)", "Push ups", "Incline Push ups", "Decline Push ups"
    , "close grip bench press (barbell or dumbbell)", "Floor press (barbell or dumbbell)", "Landmine press", "Incline chest press machine", "Decline chest press machine", "chest press machine", "Chest dips",], 
    triceps: ["Barbell skull crushers", "Overhead barbell tricep extensions", "Cable tricep push down", "Dumbbell tricep kickbacks", "Tricep Dips", "Machine tricep Dips"], 
    biceps: ["Neutral-grip barbell curls", "Close-grip barbell curls", "Wide-grip barbell curls", "Machine curls", "Alternating dumbbell curls", "Alternating supinating dumbbell curls", 
    "Hammer curls", "Concentration curls", "Spider curls", 
    "Barbell preacher curls", "Dumbbell preacher curls"], 
    back: ["Bent over barbell rows", "T-bar rows", "Pull-ups", "Close-grip seated cable rows", "Wide-grip seated cable rows", "Straight arm pull downs", "Dumbbell shoulder shrugs", 
    "Barbell shoulder shrugs", "Close-grip front lat pulldown", "Wide-grip front lat pulldown", "Rack pulls", "Rope pullover",], 
    legs: ["Back Squats", "Split squats", "Romanian deadlifts", "Leg press machine", "Goblet squats", "Front squat", "Walking lungs","Reverse lungs", "Barbell hip thrusts", "Deadlifts", "Barbell hack squats", "Side lungs"], 
    core: ["Planks", "Russian twists", "Bicycle crunches", "Sit ups", "Lying leg raises", "Mountain climbers", "Oblique crunches"],
    Cardio: ["Treadmill", "Stairmaster", "Jump rope", "Row machine", "Shadow boxing", "Elliptical", "Stationary bike"] };
  isolatedExercises: { [key: string]: string[] } = { 
    chest: ["Dumbbell flyes", "Incline dumbbell flyes", "Decline dumbbell flyes", "Cable flyes", "Incline cable flyes", "Decline cable flyes", "Chest pullovers", "Pec deck machine",], 
    triceps: ["Dumbbell skull crushers", "Overhead Dumbbell tricep extensions", "Cable tricep push down", "Single arm cable tricep push down"], 
    biceps: ["Reverse barbell curls", "Cable curls", "Single-arm cable curls", "Overhead cable curls", "Seated incline dumbbell curls", "Seated hammer curls"], 
    back: ["Bent over dumbbell rows", "Roman chair back extensions", "Inverted rows", "Meadows rows", "Bent over dumbbell rows"], 
    legs: ["Calf raises", "Leg curls", "Leg extensions", "Donkey kicks", "Single-leg cable kick backs"], 
    core: ["Flutter kicks", "Hanging leg raises", "Hollow body hold", "V-sits", "ab rollouts", "Cable crunches"] };
      
    workouts: { name: string, exercises: string[] }[] = [];

    generate(workoutName: string, muscleGroup: string) {
      if (this.workouts.length < 20) {
        const compoundExercises = this.getRandomExercises(this.componentExercises[muscleGroup.toLowerCase()], 3);
        const isolatedExercises = this.getRandomExercises(this.isolatedExercises[muscleGroup.toLowerCase()], 3);
        const workout = {
          name: workoutName,
          exercises: [...compoundExercises, ...isolatedExercises]
        };
        this.workouts.push(workout);
      } else {
        console.log('You have reached the maximum number of workout cards.');
      }
    }

  getRandomExercises(exercises: string[], count: number): string[] {
    return this.shuffleArray(exercises).slice(0, count);
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  constructor() { }
}
