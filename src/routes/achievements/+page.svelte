<script>
	import { name } from 'body-parser';
	import { text } from 'svelte/internal';
	import Nav from '../nav.svelte';
    import List from 'achievements';
</script>

<List result='achieve'></List> 

<Nav active = "achievements"/>

<div class="container text-center py-3">
	<div class="entry-field pb-3">
		<form action="POST" onsubmit="return false">
			<input
				type="text"
				placeholder="Enter new {result}"
				class="rounded"
			/>
			<button on:click={result} id="addButton">Add</button>
		</form>
</div>
</div>

