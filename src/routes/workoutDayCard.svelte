<script>
import Graph from "./graph.svelte";
export let graphData
export let graphLabels
export let title
</script>


      <div class="col-lg-4 col-sm-6 py-2 d-flex align-items-stretch">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <Graph inData={graphData} inLabel={graphLabels} title={title}></Graph>
            <a href="/workouts" class="card-link secondary">More Details</a>
          </div>
        </div>
      </div>