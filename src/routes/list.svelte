<script>
	import { each } from 'svelte/internal';

	let newItem = '';
	//Populate with previous goals or achievements
	export let todoList = [];
	export let enterNew = '';

	async function addToList() {
		todoList = [...todoList, newItem];
		const list = { newItem };
		newItem = '';

		await fetch('/api/addgoal', {
			method: 'POST',
			body: JSON.stringify(list)
		});
	}

	async function removeFromList(index) {
		todoList.splice(index, 1);
		todoList = todoList;
	}

	async function compGoals(item) {
		const delitem = { item };
		await fetch('/api/addach', {
			method: 'POST',
			body: JSON.stringify(delitem)
		});
	}
</script>

<div class="container text-center py-3">
	<div class="entry-field pb-3">
		<form action="POST" onsubmit="return false">
			<input
				id="inputField"
				bind:value={newItem}
				type="text"
				placeholder="Enter new {enterNew}"
				class="rounded"
			/>
			<button on:click={addToList} id="addButton">Add</button>
		</form>
	</div>

	{#each todoList as item, index}
		<p class="text-center listItem">
			{item}<span
				><button
					id="removeItem"
					on:click={() => {
						removeFromList(index);
					}}
				>
					<img src="/images/X.png" alt="Remove Item" width="15" />
				</button>
				<button
					id="removeItem"
					on:click={() => {
						removeFromList(index), compGoals(item);
					}}
				>
					<img src="/images/check-removebg-preview.png" alt="Move Item" width="15" />
				</button>
			</span>
		</p>
	{/each}
</div>

<style>
	#inputField {
		width: 30%;
		height: 8vh;
		border: 2px solid #3f9ffe;
		border-color: #3f9ffe;
	}
	#inputField:focus {
		outline: 2px solid #3f9ffe;
	}
	#inputField:focus::placeholder {
		color: transparent;
		transition: 0.2s;
	}
	button,
	button:active,
	button:focus {
		outline: none;
		border: none;
	}
	@media only screen and (max-width: 900px) {
		#inputField {
			width: 70%;
		}
		#addButton {
			width: 20%;
		}
	}
	.listItem {
		font-size: 2rem;
		color: #3f9ffe;
	}
</style>
