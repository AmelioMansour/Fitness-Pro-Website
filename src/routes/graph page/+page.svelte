<script>

import Graph from "../graph.svelte";
import Nav from "../nav.svelte";
import WorkoutDayCard from "../workoutDayCard.svelte";

    let name = "Joe"
    let pushData = [65, 70, 72]
    let pushLabels = ['Date1', 'Date2', "date3"]
    let pullData = [65, 59, 80, 81]
    let pullLabels = ['Date1', 'Date2', 'Date3', 'Date4']
    let legLabels = ['Date1', 'Date2', 'Date3', 'Date4']
    let legData = [200, 210, 215, 230] 
</script>



<!-- At some point im going to need to split up these cards into a component and do something like {if workoutDay.length == 0: <h1>No Workouts have been added yet. </h1>} -->

<Nav active="Home"></Nav>
<div class="container py-3">
    <div class="text-center">
      <h1 class="pb-3">Welcome Back <span id="first-name" class="primary">{name}</span></h1>
      <input id="newWorkoutDayInput" type="text">
      <br>
      <button class="btn btn-dark my-3" id="submitNewWorkoutDay">Add New Day</button>
    </div>
</div>


  <div class="container-sm">
    <div class="row justify-content-end pb-3">
      <WorkoutDayCard title={"Push Day"} graphData={pushData} graphLabels={pushLabels}></WorkoutDayCard>
      <WorkoutDayCard title={"Pull Day"} graphData={pullData} graphLabels={pullLabels}></WorkoutDayCard>
      <WorkoutDayCard title={"Leg Day"} graphData={legData} graphLabels={legLabels}></WorkoutDayCard>
    </div>
  </div>

<style>
    #newWorkoutDayInput{
      font-size: 2rem;
    }

    #submitNewWorkoutDay{
        width: 30%;
        height: 6vh;
        background-color: #3F9FFE;
        border-color: #0080FF;
    }
</style>



