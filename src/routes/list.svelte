<script>
	import { each } from "svelte/internal";


    let newItem = '';
	//Populate with previous goals or achievements
	export let todoList = []
    export let enterNew = ""

	function addToList() {
		todoList = [...todoList, newItem];
		newItem = '';
		
	}
	
	function removeFromList(index) {
		todoList.splice(index, 1)
		todoList = todoList;
    }
</script>

<div class="container text-center py-3">
	<div class="entry-field pb-3">
		<form action="POST" onsubmit="return false">
			<input id="inputField" bind:value={newItem} type="text" placeholder="Enter new {enterNew}" class="rounded">
			<button on:click={addToList} id="addButton">Add</button>
		</form>
	</div>

{#each todoList as item, index}
<p class="text-center listItem">{item}<span><button id="removeItem" on:click={() => removeFromList(index)}> <img src="/images/X.png" alt="Remove Item" width="30"> </button></span></p>

{/each}
</div>

<style>
    #inputField{
		width: 30%;
		height: 8vh;
		border: 2px solid #3F9FFE;
		border-color: #3F9FFE;
	}
	#inputField:focus{
		outline: 2px solid #3F9FFE;
	}
	#inputField:focus::placeholder{
		color:transparent;
		transition: .2s;
	}
	button, button:active, button:focus {
		outline: none;
		border: none;
	}
	@media only screen and (max-width: 1300px){
		#inputField{
			width: 70%;
		}
		#addButton{
			width: 20%;
		}
	}
	.listItem{
		font-size: 2rem;
		color:#3F9FFE;
	}

</style>


