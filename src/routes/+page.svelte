<script>

import Graph from "./graph.svelte";
import Nav from "./nav.svelte";

    let name = "Joe"
    let pushData = [65, 70, 72]
    let pushLabel = ['Date1', 'Date2', "date3"]
    let pullData = [65, 59, 80, 81]
    let pullLabels = ['Date1', 'Date2', 'Date3', 'Date4']
    let legLabel = ['Date1', 'Date2', 'Date3', 'Date4']
    let legData = [200, 210, 215, 230] 
</script>



<!-- At some point im going to need to split up these cards into a component and do something like {if workoutDay.length == 0: <h1>No Workouts have been added yet. </h1>} -->

<Nav active="Home"></Nav>
<div class="container py-3">
    <div class="text-center">
      <h1>Welcome Back <span id="first-name" class="primary">{name}</span></h1>
    </div>
  </div>


  <div class="container-sm">
    <div class="row justify-content-end py-3">
      <div class="col-lg-4 col-sm-6 py-2 d-flex align-items-stretch">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Push</h5>
            <Graph inLabel={pushLabel} inData={pushData}></Graph>
            <a href="more.html" class="card-link secondary" target="_blank">More Details</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6 py-2 d-flex align-items-stretch">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Pull</h5>
            <Graph inData={pullData} inLabel={pullLabels}></Graph>
            <a href="more.html" class="card-link secondary" target="_blank">More Details</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6 py-2 d-flex align-items-stretch">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Legs</h5>
            <Graph inData={legData} inLabel={legLabel}></Graph>
            <a href="more.html" class="secondary" target="_blank">More Details</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-sm text-center">
    <button class="btn btn-dark" id="newSession">Add New</button>
  </div>

<style>
    #newSession{
        width: 30%;
        height: 6vh;
        background-color: #3F9FFE;
        border-color: #0080FF;
    }
</style>



