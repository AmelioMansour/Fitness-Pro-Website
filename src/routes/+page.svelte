<script>
	import { name } from 'body-parser';
	import { text } from 'svelte/internal';
	import Nav from './nav.svelte';

	export let username = '';

	let UserID = '';
	let password = '';
	let firstName = ''; //use on main page as name.
	let lastName = '';
	let answer = '';
	let answer1 = '';

	function login() {
		//IF VERIFY LOGIN
	}

	async function LoginUser() {
		console.log(UserID);
		try {
			const user = {
				username,
				password
			};
			console.log('Called!');

			await fetch('/api/loginuser', {
				method: 'POST',
				body: JSON.stringify(user)
			})
				.then((Response) => Response.text())
				.then((data) => {
					UserID = data;
				});

			console.log(UserID);
		} catch (err) {
			alert(err);
			//text = '';
		}
		if (UserID != '') {
			console.log('goodjob');
		}
	}

	//Forgot Password function
	async function Forgotpassword() {
		
		try {
			const user = {
				username,
				answer
			};
			console.log('Called!');

			await fetch('/api/forgotpassword', {
				method: 'POST',
				body: JSON.stringify(user)
			})
				.then((Response) => Response.text())
				.then((data) => {
					answer1 = data;
				});

			console.log(UserID);
		} catch (err) {
			alert(err);
			//text = '';
		}
		if (answer1 != '') {
			console.log('answer correct goodjob');
		}
	}
</script>

<Nav active="Login" />
{#if UserID != ''}
	<h1 id="greeting" class="text-center" d>Welcome, {username}!</h1>
{/if}
<div id="Loginsection" class="container text-center">
	<h1 id="usernameLabel">Username</h1>
	<input
		type="text"
		bind:value={username}
		placeholder="Enter username"
		id="usernameInput"
		name="user"
	/>
	<h1 id="passwordLabel">Password</h1>
	<input
		type="password"
		bind:value={password}
		placeholder="Enter password"
		id="passwordInput"
		name="pass"
	/>
	<br />
	<!-- <input type="Submit" value="Submit"/> -->
	<button on:click={LoginUser} class="my-4" id="submitLogin"> Login </button>
	<br />
	<br />
	<br />
	<h1>Forgot your password?</h1>
	<p>
		If you forgot your password enter your username in the field and the answer to the security
		question below!
	</p>
	<input
		type="text"
		bind:value={username}
		placeholder="Enter username"
		id="usernameInput"
		name="user"
	/>
	<br />
	<h1 id="securitylabel">What is your mother's maiden name?</h1>
	<input
		type="text"
		bind:value={answer}
		placeholder="Enter answer"
		id="answerinput"
		name="answer"
	/>
	<br />
	<button on:click={Forgotpassword} class="my-4" id="submitLogin"> ForgotPassword? </button>
	{#if answer1 != ''}
		<h1 id="greeting" class="text-center" d>{username}, your Password is, "{answer1}"!</h1>
	{/if}
</div>


<style>
	/* #workouts, #goals, #achievments,#home  {
		display: none;
	} */
	/* nav=["nav.svelte"]{
		nav.label{
			display: none;
		}
	} */
	h1 {
		color: black;
		font-size: 1.5rem;
		margin: 0.5rem;
	}
	input {
		outline: 4px solid #3f9ffe;
		border-radius: 6px;
		border: none;
	}
	#submitLogin {
		margin-top: 20px;
		border-radius: 10px;
		color: #0080ff;
		/* background-color: #3F9FFE; */
		border: 5px solid #0080ff;
		width: 15%;
	}
</style>
