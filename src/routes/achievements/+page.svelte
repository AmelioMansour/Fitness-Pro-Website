<script>
	import { name } from 'body-parser';
	import { text } from 'svelte/internal';
	import Nav from '../nav.svelte';
	// import List from 'achievements';
	let passing = '';
	async function PullAchievments() {
		try {
			console.log('Called!');

			await fetch('/api/addach', {
				method: 'POST'
			})
				.then((Response) => Response.text())
				.then((data) => {
					passing = data;
				});
		} catch (err) {
			alert(err);
			//text = '';
		}
		if (result != '') {
			console.log('goodjob');
		}
		console.log(passing);
	}
</script>

<!-- <List result='achieve'></List>  -->

<Nav active="achievements" />

<div class="container text-center py-3">
	<div class="entry-field pb-3">
		
			<button on:click={PullAchievments} id="addButton">Load Achievements</button>
		
	</div>
</div>
