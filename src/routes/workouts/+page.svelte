<script>

	import Nav from "../nav.svelte";
	let title = "active"
</script>
<svelte.head>
	<title>{title}</title>
</svelte.head>




<Nav active="workouts"/>
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