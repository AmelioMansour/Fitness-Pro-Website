<script>
    import Nav from '../nav.svelte';
    import { each } from "svelte/internal";


    let newWorkout = '';
    let newDuration = '';
    let newReps = '';
    let newTotalArray = '';
    let text = '';


    //Populate with previous goals or achievements
    export let workoutList = []
    export let enterNewWorkout = ''
    export let durationList = []
    export let enterNewDuration = ''
    export let repsList = []
    export let enterNewReps = ''
    export let totalArrayList = []
    //export let enterNewC = ''

    let workoutStr = 'Workout: '
    let durationStr = 'Duration: '
    let repsStr = 'Reps: '
    let spaceStr = ' '




    async function addToList() {
        workoutList =  [...workoutList, newWorkout];
        durationList =  [...durationList, newDuration];
        repsList =  [...repsList, newReps];
        totalArrayList =  [...totalArrayList, workoutStr + newWorkout + durationStr + newDuration + repsStr + newReps];
        text = (totalArrayList);

        const listA = {newWorkout};
        newWorkout = '';
        const listB = {newDuration};
        newDuration = '';
        const listC = {newReps};
        newReps = '';
        const listD = {newWorkout, newDuration}
        newTotalArray = '';

        // await fetch('/api/addgoal', {
        //     method: 'POST',
        //     body: JSON.stringify(list)
        // });

        //todoListB =  [...todoListB,newItemB];
        //const listB = {newItemB};
        //newItemB = '';

        await fetch('/api/addgoal', {
            method: 'POST',
            body: JSON.stringify(listA)

        });
    
}

    //Populate with previous goals or achievements


async function removeFromList(index) {
    todoList.splice(index, 1)
    todoList = todoList;

}
</script>

<Nav active="workouts" />

<div class="container text-center py-3">
	<div class="entry-field pb-3">
		<form action="POST" onsubmit="return false">
			<input id="inputField" bind:value={newWorkout} type="text" placeholder="Enter a Workout {enterNewWorkout}" class="rounded">
            <input id="inputField" bind:value={newDuration} type="text" placeholder="Enter a Duration {enterNewDuration}" class="rounded">
            <input id="inputField" bind:value={newReps} type="text" placeholder="Enter amount of Reps {enterNewReps}" class="rounded">

			<button on:click={addToList} id="addButton">Add</button>
		</form>
	</div>

<!-- {#each todoListA as itemA, index}
<p class="text-center listItemA">{itemA}<span><button id="removeItem" on:click={() => {removeFromList(index)}}> <img src="/images/X.png" alt="Remove Item" width="15"> </button> <button id="removeItem" on:click={() => {removeFromList(index)}}> <img src="/images/check-removebg-preview.png" alt="Move Item" width="15"> </button> </span></p>
{/each}

{#each todoListB as itemB, index}
<p class="text-center listItemB">{itemB}<span><button id="removeItem" on:click={() => {removeFromList(index)}}> <img src="/images/X.png" alt="Remove Item" width="15"> </button> <button id="removeItem" on:click={() => {removeFromList(index)}}> <img src="/images/check-removebg-preview.png" alt="Move Item" width="15"> </button> </span></p>
{/each} -->

{#each text as itemC, index}
<p class="text-center listItemC">{itemC}<span><button id="removeItem" on:click={() => {removeFromList(index)}}> <img src="/images/X.png" alt="Remove Item" width="15"> </button> <button id="removeItem" on:click={() => {removeFromList(index)}}> <img src="/images/check-removebg-preview.png" alt="Move Item" width="15"> </button> </span></p>
{/each}
</div>

<style>
    #inputField{
		width: 33%;
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
		outline: 2px;
		border: none;
	}
	@media only screen and (max-width: 900px){
		#inputField{
			width: 70%;
		}
		#addButton{
			width: 20%;
		}
	}
	.listItemC{
		font-size: 2rem;
		color:#3F9FFE;
	}

</style>