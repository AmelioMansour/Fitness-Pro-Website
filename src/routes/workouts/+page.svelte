<script>
    import Nav from '../nav.svelte';
    import { each, select_option } from "svelte/internal";

    let newWorkout = '';
    var newDuration = '';
    let newReps = '';
    let newIntensity = '';
    let newTotalArray = '';
    let finalText = '';
    var caloriesText = 0;

    export let workoutList = []
    export let enterNewWorkout = ''
    export let durationList = []
    export let enterNewDuration = ''
    export let repsList = []
    export let enterNewReps = ''
    export let intensityList = []
    export let totalArrayList = []

    let newIntensityType = '';
    export let intensityTypeList = []

    let workoutStr = 'Workout: '
    let durationStr = 'Duration: '
    let repsStr = 'Reps: '
    let intensityStr = 'Intensity: '

    let spaceStr = '\xa0'
    let minsWordStr = 'Minute(s)'
    let repsWordStr = 'Reps'

    const LEAmount = 7
    const MEAmount = 8.5
    const VEAmount = 12

    var LEABurned = 0
    var MEABurned = 0
    var VEABurned = 0

    var caloriesBurnedHolding = 0
    var caloriesBurnedTotal = 0

    async function addToList() {
        workoutList =  [...workoutList, newWorkout];
        durationList =  [...durationList, newDuration];
        repsList =  [...repsList, newReps];
        intensityList = [...intensityList, newIntensity];
        intensityTypeList = [...intensityTypeList, newIntensityType];
        totalArrayList =  [...totalArrayList, ('| ' + workoutStr + newWorkout + spaceStr +'|') +'\n'+ (durationStr + newDuration + spaceStr + minsWordStr + spaceStr + '|')  +'\n'+ (repsStr + newReps + spaceStr + repsWordStr + spaceStr + '|') +'\n' + (intensityStr + newIntensityType + spaceStr + '|') + '\n' + ('Calories Burned: ' + caloriesText + ' | ')];
        finalText = (totalArrayList);
    }

    async function clearStringsAfter() {
        newWorkout = '';
        newDuration = '';
        newReps = '';
        newIntensity = '';
        newIntensityType = '';
        newTotalArray = '';
    }

    async function clearCalories() {
        caloriesBurnedTotal = 0;
    }

    async function clearStringsBefore() {
        LEABurned = 0;
        MEABurned = 0;
        VEABurned = 0;
    }

    async function intensitySlide(){
        if (newIntensity == 0) {
            newIntensityType = "Low"
        } if (newIntensity == 50) {
            newIntensityType = "Moderate"
        } if (newIntensity > 50) {
            newIntensityType = "Vigorous"
        }
    }

    async function removeFromList(index) {
        finalText.splice(index, 1)
        finalText = finalText;
    }

    async function calorieTracker() {
        //low = 400/hr, LEAmount (Low Exercise Amount)
        //moderate = 500/hr, MEAmount (Moderate Exercise Amount)
        //vigorous = 700/hr, VEAmount (Vigorous Exercise Amount)
        //LEABurned = (LEAmount) * Number(newDuration)
        //MEABurned = (MEAmount) * Number(newDuration)
        //VEABurned = (VEAmount) * Number(newDuration)

        if (newIntensity == 0) {
            LEABurned = (LEAmount) * newDuration
            caloriesText = LEABurned
        } if (newIntensity == 50) {
            MEABurned = (MEAmount) * newDuration
            caloriesText = MEABurned
        } if (newIntensity == 100) {
            VEABurned = (VEAmount) * newDuration
            caloriesText = VEABurned
        }

        //caloriesBurnedHolding = (LEABurned) + (MEABurned) + (VEABurned)
        caloriesBurnedHolding = (caloriesText)
        caloriesBurnedTotal= (caloriesBurnedTotal) + (caloriesBurnedHolding)
    }

    async function addWorkouts() {
		try {
			const workoutsMain = {
				newWorkout,
				newDuration,
				newReps,
                newIntensityType,
                caloriesBurnedHolding,
                caloriesBurnedTotal
			};
			console.log('Called!');

			await fetch('/api/addworkouts', {
				method: 'POST',
				body: JSON.stringify(workoutsMain)
			});

		} catch (err) {
			alert(err);
		}
	}
</script>


<Nav active="workouts" />

<div class="container text-center py-1000000">
    <div>
        <input id = "textForIntensity" type = "text" bind:value={newIntensityType} placeholder="Intensity not Selected">
    </div>
	<div class="entry-field pb-3">
        <div class = "sliderContainer">
            <!-- <label for = "myRange">Select Intensity</label> -->
            <input type="range" min="0" max="100" bind:value={newIntensity} on:click={() => intensitySlide()} class="slider" id="myRange" oninput="rangeValue.innerText = this.value" step = "50" list="sliderSettings">
            <div id="myOwnDiv" class="thinBorder">Space</div>
            <p>Move Slider to Select Intensity</p>
            <datalist id = "sliderSettings">
                <option value="0">
                <option value="50">
                <option value="100">
            </datalist>

        </div>
		<form action="POST" onsubmit="return false">
			<input id="inputFieldMain" bind:value={newWorkout} type="text" placeholder="Enter a Workout {enterNewWorkout}" class="rounded">
        <br>
            <input id="inputField" bind:value={newDuration} type="text" placeholder="Enter a Duration (in minutes){enterNewDuration}" class="rounded">
            <input id="inputField" bind:value={newReps} type="text" placeholder="Enter amount of Reps {enterNewReps}" class="rounded">
        <br>

            <div id="myOwnDiv" class="thinBorder">Space</div>

            <button on:click={() => {clearCalories()}} id="clearButton">Clear Total Calories</button>

            <div id="myOwnDiv" class="thinBorder">Space</div>

			<button on:click={() => {clearStringsBefore(), calorieTracker(), addToList(), addWorkouts(), clearStringsAfter()}} id="addButton">Add</button>
		</form>

        <div id="myOwnDiv" class="thinBorder">Space</div>

        <input id="textMain" type = "text" placeholder="Total Calories Burned: {caloriesBurnedTotal}">


	</div>

    {#each (finalText) as allItems, index}
            <h1 class="text-center allItems">{allItems}<button id="removeItem" on:click={() => {removeFromList(index)}}> <img src="/images/X.png" alt="Remove Item" width="10" height="10"> </button></h1>
    {/each}
</div>


<style>

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
    #clearButton {
        display: inline-block;
        padding: 4px 8px;
        font-size: 15px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        outline: none;
        color: #fff;
        background-color: #fe853f;
        border: none;
        border-radius: 10px;
        box-shadow: 0 9px #999;
    }

    #clearButton:hover {background-color: #1b2bbd}

    #clearButton:active {
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
        #clearButton{
			width: 20%;
		}
	}
	.allItems{
        text-align:right;
		font-size: 15px;
		color:#fe6c3f;
        display: block;
        min-height: auto;
	}

    #textMain {
        width: 100%;
        text-align: center;
        position: relative;
        padding: 10px 20px;
        border: none !important;
        border-color: transparent !important;
        white-space: normal;
    }

    .thinBorder {
    border-left: 1px transparent rgba(0, 0, 0, 0.3);
    }

    #myOwnDiv {
        height: 100%;
        color: transparent;
    }

    #textForIntensity {
        text-align: center;
        position: relative;
        padding: 10px 20px;
        border: none !important;
        border-color: transparent !important;
        white-space: normal;
    }
</style>