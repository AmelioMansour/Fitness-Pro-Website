<script>
	import { name } from 'body-parser';
	import { text } from 'svelte/internal';
	import Nav from '../nav.svelte';
	// import List from 'achievements';
	let passing = [];
	async function PullAchievments() {
		try {
			console.log('Called!');

			await fetch('/api/addach', {
				method: 'POST'
			})
				.then((Response) => Response.json())
				.then((data) => {
					passing = data;
				});
			console.log(passing);
		} catch (err) {
			alert(err);
			//text = '';
		}
		if (passing != '') {
			console.log('goodjob');
		}
		console.log(passing[1]);
	}
</script>

<!-- <List result='achieve'></List>  -->

<Nav active="achievements" />

<div class="container text-center py-3">
	<div class="entry-field pb-3">
		<button on:click={PullAchievments} id="addButton">Load Achievements</button>
		{#each passing as ach}
			<h1 class="DisplayedAchievments">
				{ach}
			</h1>
		{/each}
	</div>
</div>

<style>
	.DisplayedAchievments {
		color: red;
		font-size: 1.5rem;
		margin: 0.5rem;
	}
</style>
