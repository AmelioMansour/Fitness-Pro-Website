class User{

    name
    username
    password
    workoutDays = [workoutDay]
    goals = []
    achievements = []

    constructor(name, username, password, workoutDays, goals, achievements){
        this.name = name
        this.username = username
        this.password = password
        this.workoutDays = workoutDays
        this.goals = goals
        this.achievements = achievements
    }

    addWorkoutDay(workoutDay) {
        this.workoutDays.push(workoutDay)
    }
}

class workoutDay extends User {
    name
    exercises = []


    constructor(name, exercise){
        this.name = name
        this.exercises = exercise
    }

    addExercise(exerciseName) {
        this.exercises.push(exerciseName)
    }
}


class exercise extends workoutDays {
    data = []

    constructor(name, data){
        this.name = name
        this.data = data
    }

    addSet(date, weight){
        this.data.push({date, weight})
    }

}