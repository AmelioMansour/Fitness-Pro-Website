<script>
    import Nav from '../nav.svelte';
    import { each } from "svelte/internal";

    let newWorkout = '';
    let newDuration = '';
    let newReps = '';
    let newTotalArray = '';
    let finalText = '';

    export let workoutList = []
    export let enterNewWorkout = ''
    export let durationList = []
    export let enterNewDuration = ''
    export let repsList = []
    export let enterNewReps = ''
    export let totalArrayList = []

    //export let finalArray = []
    //let newFinalText = '';

    let workoutStr = 'Workout: '
    let durationStr = 'Duration: '
    let repsStr = 'Reps: '

    let spaceStr = '\xa0'
    let minsWordStr = 'Minutes'
    let repsWordStr = 'Reps'

    async function addToList() {
        workoutList =  [...workoutList, newWorkout];
        durationList =  [...durationList, newDuration];
        repsList =  [...repsList, newReps];
        totalArrayList =  [...totalArrayList, (workoutStr + newWorkout + spaceStr) +'\n'+ (durationStr + newDuration + spaceStr + minsWordStr + spaceStr)  +'\n'+ (repsStr + newReps + spaceStr + repsWordStr + spaceStr)];
        finalText = (totalArrayList);
        //finalArray = [...finalText, newFinalText]

        const listForWorkout = {newWorkout};
        newWorkout = '';
        const listForDuration = {newDuration};
        newDuration = '';
        const listForReps = {newReps};
        newReps = '';
        const listForFinal = {newWorkout, newDuration, newReps}
        newTotalArray = '';
        const listForNewFinalText = {newFinalText};
        //newFinalText = '';

        // await fetch('/api/addgoal', {
        //     method: 'POST',
        //     body: JSON.stringify(listA)

        // });
    
}

async function removeFromList(index) {
    finalText.splice(index, 1)
    finalText = finalText;

}
</script>


<Nav active="workouts" />


<div class="container text-center py-1000000">
	<div class="entry-field pb-3">
		<form action="POST" onsubmit="return false">
			<input id="inputFieldMain" bind:value={newWorkout} type="text" placeholder="Enter a Workout {enterNewWorkout}" class="rounded">
        <br>
            <input id="inputField" bind:value={newDuration} type="text" placeholder="Enter a Duration {enterNewDuration}" class="rounded">
            <input id="inputField" bind:value={newReps} type="text" placeholder="Enter amount of Reps {enterNewReps}" class="rounded">
        <br>
			<button on:click={addToList} id="addButton">Add</button>
		</form>
	</div>

    {#each (finalText) as allItems, index}
            <h1 class="text-center allItems">{allItems}<button id="removeItem" on:click={() => {removeFromList(index)}}> <img src="/images/X.png" alt="Remove Item" width="10" height="10"> </button></h1>
    {/each}
</div>


<style>
    h1 {
        padding-top: 50px;
        padding-right: 30px;
        padding-bottom: 50px;
        padding-left: 80px;
    }
    #inputField{
        float: bottom;
		width: 30%;
		height: 7vh;
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
    #inputFieldMain{
		width: 60.33%;
		height: 7vh;
		border: 2px solid #3F9FFE;
		border-color: #3F9FFE;
	}
	#inputFieldMain:focus{
		outline: 2px solid #3F9FFE;
	}
	#inputFieldMain:focus::placeholder{
		color:transparent;
		transition: .2s;
	}
    
    #addButton {
        display: inline-block;
        padding: 10px 20px;
        font-size: 20px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        outline: none;
        color: #fff;
        background-color: #3F9FFE;
        border: none;
        border-radius: 10px;
        box-shadow: 0 9px #999;
    }

    #addButton:hover {background-color: #1b2bbd}

    #addButton:active {
        background-color: #3F9FFE;
        box-shadow: 0 5px #666;
        transform: translateY(8px);
    }

	#removeItem{
		margin-top: 1px;
		border-radius: 10px;
		color: #0080ff;
		border: 4px solid #0080ff;
		width: 3%;
        height: 1%;
	}
	@media only screen and (max-width: 900px){
		#inputField{
			width: 70%;
		}
		#addButton{
			width: 20%;
		}
	}
	.allItems{
		font-size: 20px;
		color:#fe6c3f;
        display: block;
        min-height: auto;
	}
</style>