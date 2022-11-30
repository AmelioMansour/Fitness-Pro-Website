<script>
	import { text } from 'svelte/internal';
	import Nav from '../nav.svelte';
	export let username = '';

	let password = '';
	let firstName = ''; //use on main page as name.
	let lastName = '';
	let answer= '';
	function login() {
		//IF VERIFY LOGIN
	}

	async function addUser() {
		try {
			const user = {
				firstName,
				lastName,
				username,
				password,
				answer
			};
			console.log('Called!');

			await fetch('/api/adduser', {
				method: 'POST',
				body: JSON.stringify(user)
			});
			// console.log(JSON.stringify(user))
			
			//sets field (firstname) blank
			firstName = '';
		} catch (err) {
			alert(err);
			//text = '';
		}
	}
</script>

<Nav active="register" />

<div class="container text-center">
	<!-- <form action="createaccount" method="post"> -->
	<!-- Login on form submission. -->
	<!-- Either have login make a new account if username and password not same
    or have a seperate register page, or ask them if they want to make a new account because
the account isnt already registered -->
	<h1 id="nameLabel">First Name</h1>
	<input
		type="text"
		bind:value={firstName}
		placeholder="Enter first name"
		id="firstNameInput"
		name="first"
	/>
	<h1 id="nameLabel">Last Name</h1>
	<input
		type="text"
		bind:value={lastName}
		placeholder="Enter last name"
		id="lastNameInput"
		name="last"
	/>
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
	<br>
	<br>
	<h2>Security Question </h2>
	<br>
	<h1 id="securitylabel">What is your mother's maiden name?</h1>
	<input
		type="text"
		bind:value={answer}
		placeholder="Enter answer"
		id="answerinput"
		name="answer"
	/>
	
	<br />
	<!-- <input type="Submit" value="Submit"/> -->
	<button on:click={addUser} class="my-4" id="submitLogin"> Submit </button>
	<!-- </form> -->

	
</div>

<style>
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
