<script>
    import List from "../list.svelte";
	import Nav from "../nav.svelte";
	import { each } from 'svelte/internal';

	let newItem = ''
	//Populate with previous goals or achievements
	export let todoList = [];
	export let enterNew = '';
    let comments = ''
    let dayOfWeek = ''
    let numberOfWorkouts = ''
    
    const validDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

    function validate() {
        if (!validDays.includes(dayOfWeek.toLowerCase())) {
            alert("Enter Valid Day")
            return false
        }
        if (typeof(parseInt(numberOfWorkouts)) != "number") {
            alert("Enter Valid Amount of Workouts")
            return false
        }
        return true
    }

    function addToList() {
        if (!validate()) {
            return
        }
        newItem = `I aim to complete ${numberOfWorkouts} workouts on ${dayOfWeek}... ${comments}`
		todoList = [...todoList, newItem];
		const list = { newItem };
		newItem = '';
        dayOfWeek = '';
        numberOfWorkouts = ''

    }


    function removeFromList(index) {
		todoList.splice(index, 1);
		todoList = todoList;
	}

</script>


<Nav active="goals" />
<div class="container text-center py-3">
	<div class="entry-field pb-3">
        
		<form onsubmit="return false">
            <!-- <span class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Enter Day of the Week
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <p class="dropdown-item">Monday</p>
                  <p class="dropdown-item">Tuesday</p>
                  <p class="dropdown-item">Wednesday</p>
                  <p class="dropdown-item">Thursday</p>
                  <p class="dropdown-item">Friday</p>
                  <p class="dropdown-item">Saturday</p>
                  <p class="dropdown-item">Sunday</p>
                </div>
              </span> -->
            
            <span>
                <input type="text" bind:value={dayOfWeek} placeholder="Enter Day of week">
            </span>
            <span>
                <input type="text" bind:value={numberOfWorkouts} placeholder="Enter Number of Workouts">
            </span>
            <span>
                <input type="text" bind:value={comments} placeholder="Enter additional Comments">
            </span>
            <br>
			<button on:click={addToList} id="addButton">Add</button>
		</form>
	</div>



<!-- ADD TO GOAL LIST SELECTION -->

	{#each todoList as item, index}
		<p class="text-center listItem">
			{item}
            <span>
                <button
					id="removeItem"
					on:click={() => {
						removeFromList(index);
					}}
				>
					<img src="/images/X.png" alt="Remove Item" width="15" />
				</button>
			</span>
		</p>
	{/each}
</div>



<!-- END HTML -->
<style>
	input {
		width: 30%;
		height: 8vh;
		border: 4px solid #3f9ffe;
        border-radius: 10px;
		border-color: #3f9ffe;
	}
	input:focus {
		outline: 2px solid #3f9ffe;
	}
	input:focus::placeholder {
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

    #addButton {
        background-color: #3f9ffe;
        border: 2px solid #0080FF;
        height: 4vh;
        width: 90%;
        margin-top: 10px;
    }
    #addButton:hover {
        background-color: #0080FF;
        border: 2px solid #3f9ffe;
    }
</style>






 
